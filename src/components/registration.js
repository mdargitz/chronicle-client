import React from 'react';
import {connect} from 'react-redux';
import RegistrationForm from './registration-form';
import {Redirect, Link} from 'react-router-dom';
import './registration.css';

export class Registration extends React.Component{
  render(){
    if (localStorage.getItem('token')){
      return <Redirect to="/" />;
    }
    return (
      <div className='reg-background'>
        <div className='reg-title'>
          <h1>CHRONICLE</h1>
          <p>Sign up to create stories, enter story details and get writing!</p>
        </div>
        <div className='reg-container'>
          <h2>Create An Account</h2>
          <RegistrationForm />
          Already have an account? <Link to='/login'>Log in here</Link>
        </div>
      </div>
    );
  }
  
}

export default connect()(Registration);
