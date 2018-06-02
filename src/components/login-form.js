import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from './input';
import {login} from '../actions/login';
import { required, notEmpty } from '../validators';
import {withRouter} from 'react-router-dom';
import './login-form.css';

export class LoginForm extends React.Component {
  
  onSubmit(values){
    const {username, password} = values;
    this.props.dispatch(login(username, password))
      .then(() => this.props.history.push('/stories'));
  }

  render(){
    return(
      <form className='login-form'
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <Field 
          type="text" 
          element="input"
          label="Username" 
          name="username"
          component={Input}
          validate={[required, notEmpty]}/>
        <Field 
          type="password" 
          element="input"
          label="Password" 
          name="password"
          component={Input}
          validate={[required, notEmpty]}/>
        <button type="submit">Get Started!</button>
      </form>
    );
  }
  
}

export default reduxForm({
  form : 'loginForm'
})((withRouter)(LoginForm));