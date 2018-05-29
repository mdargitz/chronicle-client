import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';

export class DetailsForm extends React.Component{
//get needed fields from parent
//get form name for state from props



  render(){
    const fields = this.props.fields.map((field, index) => {
      return <Field
        key={index}
        type="input"
        component={Input}
        label={field}
        name={field}
        element="input"
      />;
    });


    return(
      <form>
        {fields}
      </form>
    );
  }
}

export default reduxForm({})(DetailsForm);