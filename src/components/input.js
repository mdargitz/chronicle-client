import React from 'react';
import './input.css';

//Properites from Parent: input label, name, element, placeholder & meta information from Redux-Form
//Properties from Redux: none
//Additional Component Details: Used in all redux-forms
export default class Input extends React.Component{
  //After component is updated, check to see if active, and if so, move focus
  componentDidUpdate(prev){
    if (!prev.meta.active && this.props.meta.active){
      this.input.focus();
    }
  }


  render(){
    const Element = this.props.element;
    //show errors above field
    let error;
    if(this.props.meta.touched && this.props.meta.error){
      error = <div className='error'>{this.props.meta.error}</div>;
    }

    let warning;
    if(this.props.meta.touched && this.props.meta.warning){
      warning = <div>{this.props.meta.warning}</div>;
    }

    return(
      <div className='field-container'>
        <label htmlFor={this.props.input.name}>
          {this.props.label}
          {/* if there is an error or warning shows it here */}
          {error}
          {warning}
        </label>
        <Element
          {...this.props.input}
          id={this.props.input.name}
          ref={input => (this.input = input)}
          placeholder={this.props.placeholder || null}
          rows='4'
          cols='40'
          type = {this.props.type || 'text'}
        >

          {this.props.children}

        </Element>
      </div>
    );
  }
}