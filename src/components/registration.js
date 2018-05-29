import React from 'react';
import {connect} from 'react-redux';
import RegistrationForm from './registration-form';

export function Registration(){
  return (
    <div>
      <h1>Create An Account</h1>
      <main>
        <RegistrationForm />
      </main>
    </div>
  );
}

export default connect()(Registration);
