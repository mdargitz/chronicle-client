import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import {required, notEmpty, noSpaces, minLength, maxLength} from '../validators';

export class RegistrationForm extends React.Component {

  onSubmit(values){
    console.log(values);
  }

  render(){
    return(
      <form 
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <Field 
          name="username"
          type="input"
          element="input"
          component={Input}
          label="Username"
          validate={[required, notEmpty, noSpaces, minLength, maxLength]}
        />
        <Field 
          name="password"
          type="input"
          element="input"
          component={Input}
          label="Password"
          validate={[required, notEmpty, noSpaces, minLength, maxLength]}       
        />
        <Field 
          name="confirm-password"
          type="input"
          element="input"
          component={Input}
          label="Confirm Password"
          validate={[required, notEmpty, noSpaces, minLength, maxLength]}
        />
        <button type="submit"> Sign Up!</button>
      </form>)
    ;
  }

}

export default reduxForm({
  form : 'RegistrationForm'
})(RegistrationForm);