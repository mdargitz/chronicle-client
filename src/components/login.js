import React from 'react';
import LoginForm from './login-form';
import {Redirect, Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../actions/login';
import './login.css';
import {openAbout} from '../actions/modal';
import AboutModal from './about-modal';

export class Login extends React.Component {

  handleGuestLogin(){
    this.props.dispatch(login('guestuser10', 'password10'))
      .then(()=> this.props.history.push('/'));
  }
  
  render(){
    if (localStorage.getItem('token')){
      return <Redirect to="/" />;
    }
    return (
      <div className='login-background'>
        <header role='banner' className='login-title'>
          <h1>CHRONICLE</h1>
          <p>A writer&apos;s aid to inspire, plan, enhance and build worlds!</p>
          <button className='about-btn' onClick={() => this.props.dispatch(openAbout())}>Tell me more!</button>
          <AboutModal isOpen={this.props.isOpen}/>
          
        </header>
        <main role='main' className='login-container'>
          <h2>Log In</h2>
          
          <LoginForm />
          <Link to='/register'>Create your free account!</Link>
          <button className='guest-btn' 
            onClick={()=>this.handleGuestLogin()}>
          - or login as a guest -</button>
        </main>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpen : state.modal.aboutOpen
  };
}

export default connect(mapStateToProps)((withRouter)(Login));