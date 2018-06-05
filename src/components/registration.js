import { connect } from 'react-redux';
import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import RegistrationForm from './registration-form';
import './registration.css';

//Properites from Parent: none
//Properties from Redux: dispatch
//Additional Component Details: Not resuable
export class Registration extends React.Component{
  render(){
    if (localStorage.getItem('token')){
      return <Redirect to="/" />;
    }
    return (
      <div className='reg-background'>
        <header role='banner' className='reg-title'>
          <h1>CHRONICLE</h1>
          <p>Sign up to create stories, enter story details and get writing!</p>
        </header>
        <main role='main' className='reg-container'>
          <h2>Create An Account</h2>
          <RegistrationForm />
          Already have an account? <Link to='/login'>Log in here</Link>
        </main>
      </div>
    );
  }
  
}

export default connect()(Registration);
