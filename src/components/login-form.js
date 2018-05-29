import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';

export class LoginForm extends React.Component {
  
  render(){
    return(
      <form>
        <Field 
          type="input" 
          element="input"
          label="Username" 
          name="username"
          component={Input}/>
        <Field 
          type="input" 
          element="input"
          label="Password" 
          name="password"
          component={Input}/>
      </form>
    );
  }
  
}

export default reduxForm({
  form : 'loginForm'
})(LoginForm);