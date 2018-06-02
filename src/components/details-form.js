import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import { updateStory, updateCharacter, updateSetting, updatePlot } from '../actions/stories';
import { closeModal } from '../actions/modal';
import './details-form.css';

export class DetailsForm extends React.Component{
//get needed fields from parent
//get form name for state from props

  onSubmit(values){

    if (this.props.form === 'general'){
      this.props.dispatch(updateStory(values, this.props.id));
    }
    if(this.props.form === 'editcharacters'){
      this.props.dispatch(updateCharacter(values, this.props.id, this.props.storyId));
    }
    if(this.props.form === 'editsettings'){
      this.props.dispatch(updateSetting(values, this.props.id, this.props.storyId));
    }
    if(this.props.form === 'editplots'){
      this.props.dispatch(updatePlot(values, this.props.id, this.props.storyId));
    }
    this.props.dispatch(closeModal());
  }


  render(){
    const fields = this.props.fields.map((field, index) => {
      return <Field
        key={index}
        type="input"
        component={Input}
        label={field.label}
        name={field.name}
        placeholder={field.placeholder}
        element="input"
      />;
    });


    return(
      <form 
        className='details-form'
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        {fields}
        <button type="submit">Update!</button>
      </form>
    );
  }
}

export default reduxForm({})(DetailsForm);