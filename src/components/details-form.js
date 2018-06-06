import { closeModal } from '../actions/modal';
import { Field, reduxForm } from 'redux-form';
import Input from './input';
import React from 'react';
import { updateStory, updateCharacter, updateSetting, updatePlot } from '../actions/stories';
import './details-form.css';

//Properites from Parent: fields to be rendered (including the name, label, element type (if not input) and placeholder)
//story ID of given details
//Properties from Redux: dispatch, redux-form values
//Additional Component Details:Redux-Form, Reusable
export class DetailsForm extends React.Component{

  onSubmit(values){
    const newObj = {};
    Object.keys(values).forEach((key) => {
      newObj[key.split('-')[0]] = values[key];
    });

    if (this.props.form === 'general'){
      this.props.dispatch(updateStory(newObj, this.props.id));
    }
    if(this.props.form === 'editcharacters'){
      this.props.dispatch(updateCharacter(newObj, this.props.id, this.props.storyId));
    }
    if(this.props.form === 'editsettings'){
      this.props.dispatch(updateSetting(newObj, this.props.id, this.props.storyId));
    }
    if(this.props.form === 'editplots'){
      this.props.dispatch(updatePlot(newObj, this.props.id, this.props.storyId));
    }
    this.props.dispatch(closeModal());
    
  }


  render(){
    const fields = this.props.fields.map((field, index) => {
      return <Field
        key={index}
        component={Input}
        label={field.label}
        name={field.name}
        placeholder={field.placeholder}
        element={field.element || 'input'}
      />;
    });

    let succeeded;
    if(this.props.submitSucceeded){
      succeeded = <div className='success'>Success!</div>;
    }

    return(
      <form 
        
        className='details-form'
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        {succeeded}
        {fields}
        <button type="submit">Update!</button>
      </form>
    );
  }
}


export default reduxForm({})(DetailsForm);