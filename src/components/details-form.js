import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import { updateStory } from '../actions/stories';

export class DetailsForm extends React.Component{
//get needed fields from parent
//get form name for state from props

  onSubmit(values){

    if (this.props.form === 'general'){
      this.props.dispatch(updateStory(values, this.props.id));
    }
  }


  render(){
    console.log(this.props);
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
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        {fields}
        <button type="submit">Update!</button>
      </form>
    );
  }
}

export default reduxForm({})(DetailsForm);