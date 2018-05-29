import React from 'react';

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
      error = <div>{this.props.meta.error}</div>;
    }

    let warning;
    if(this.props.meta.touched && this.props.meta.warning){
      warning = <div>{this.props.meta.warning}</div>;
    }

    return(
      <div>
        <label htmlFor={this.props.input.name}>
          {this.props.label}
          {/* //IF there is an error or warning shows it here */}
          {error}
          {warning}
        </label>
        <Element
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          ref={input => (this.input = input)}
        >

          {this.props.children}

        </Element>
      </div>
    );
  }
}