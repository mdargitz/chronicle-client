import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export default () => Component => {
  function mustLogin(props){
    console.log(props);
    if(props.loading){
      return <div> Logging in...</div>;
    }
    else if (!localStorage.getItem('token')){
      return <Redirect to='/' />;
    }

    return <Component {...props} />;
  }

  const mapStateToProps = (state) => ({
    loading : state.loginReducer.loading,
    loggedIn : state.loginReducer.currentUser !== null,
    error : state.loginReducer.error
  });
  
  return connect(mapStateToProps)(mustLogin);
};

