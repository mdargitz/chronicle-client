import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import {required, notEmpty, noSpaces, minLength, maxLength, confirmPassword} from '../validators';
import { registerUser } from '../actions/registration';
import { login } from '../actions/login';
import {withRouter} from 'react-router-dom';

export class RegistrationForm extends React.Component {

  onSubmit(values){
    const {username, password} = values;
    const user = {username, password};
    return this.props.dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)))
      .then(() => this.props.history.push('/stories'));
  }

  render(){
    return(
      <form 
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <Field 
          name="username"
          type="text"
          element="input"
          component={Input}
          label="Username"
          validate={[required, notEmpty, noSpaces, minLength, maxLength]}
        />
        <Field 
          name="password"
          type="password"
          element="input"
          component={Input}
          label="Password"
          validate={[required, notEmpty, noSpaces, minLength, maxLength]}       
        />
        <Field 
          name="confirm-password"
          type="password"
          element="input"
          component={Input}
          label="Confirm Password"
          validate={[required, notEmpty, confirmPassword]}
        />
        <button type="submit"> Sign Up!</button>
      </form>)
    ;
  }

}

export default reduxForm({
  form : 'RegistrationForm'
})((withRouter)(RegistrationForm));