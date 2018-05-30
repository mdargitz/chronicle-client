import React from 'react';
import {connect} from 'react-redux';
import RegistrationForm from './registration-form';
import {Redirect} from 'react-router-dom';

export class Registration extends React.Component{
  render(){
    if (localStorage.getItem('token')){
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Create An Account</h1>
        <main>
          <RegistrationForm />
        </main>
      </div>
    );
  }
  
}

export default connect()(Registration);
