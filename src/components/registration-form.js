import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Input from './input';
import { login } from '../actions/login';
import React from 'react';
import { registerUser } from '../actions/registration';
import { required, notEmpty, noSpaces, minLength, maxLength, confirmPassword } from '../validators';
import { withRouter } from 'react-router-dom';
import './registration-form.css';


//Properites from Parent: history from with-router, 
//Properties from Redux: error and loading details resulting from auth async actions
//Additional Component Details: Not resuable
export class RegistrationForm extends React.Component {

  onSubmit(values){
    const {username, password} = values;
    const user = {username, password};
    return this.props.dispatch(registerUser(user))
      .then(() => {
        if(!this.props.error){
          return this.props.dispatch(login(username, password))
            .then(() => this.props.history.push('/stories'));
        }
      });
  }

  render(){

    let error = <div className='submit-error'>{this.props.error}</div>;
    let loading = <div className='loading'>{this.props.loading}</div>;

    return(
      <form className='reg-form'
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        
        {error}
        {loading}

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

const mapStateToProps = state => {
  return {
    error : state.auth.error,
    loading: state.auth.loading
  };
};

export default reduxForm({
  form : 'RegistrationForm'
})(connect(mapStateToProps)((withRouter)(RegistrationForm)));