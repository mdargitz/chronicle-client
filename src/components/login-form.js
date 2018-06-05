import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Input from './input';
import { login } from '../actions/login';
import React from 'react';
import { required, notEmpty } from '../validators';
import { withRouter } from 'react-router-dom';
import './login-form.css';

//Properites from Parent: ROUTE information (including history)
//Properties from Redux: dispatch, redux-form information
//Additional Component Details:Not reusable
export class LoginForm extends React.Component {
  
  onSubmit(values){
    const {username, password} = values;
    this.props.dispatch(login(username, password))
      .then(() => { 
        if (localStorage.getItem('token')){
          this.props.history.push('/stories');
        }});
  }

  render(){

    let error = <div className='submit-error'>{this.props.error}</div>;
    let loading = <div className='loading'>{this.props.loading}</div>;
    return(
      <form className='login-form'
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        {error}
        {loading}
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

const mapStateToProps = state => {
  return {
    error: state.loginReducer.error,
    loading: state.loginReducer.loading
  };
};

export default reduxForm({
  form : 'loginForm'
})(connect(mapStateToProps)((withRouter)(LoginForm)));