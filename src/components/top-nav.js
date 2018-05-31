import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/login';
import {withRouter} from 'react-router-dom';

export class TopNav extends React.Component{

  handleClick(){
    this.props.dispatch(logout());
    this.props.history.push('/');
  }

  render(){
    return (
      <nav>
        <button>About</button>
        <button onClick={()=>this.handleClick()}>Logout</button>
      </nav>
    );
  }
  
}

export default connect()((withRouter)(TopNav));