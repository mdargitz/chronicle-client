import React from 'react';
import LoginForm from './login-form';
import {Redirect, Link} from 'react-router-dom';

export default class Login extends React.Component {
  
  render(){
    if (localStorage.getItem('token')){
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Log In</h1>
        <LoginForm />
        <Link to='/register'>Or create your free account!</Link>
      </div>
    );
  }
  
}