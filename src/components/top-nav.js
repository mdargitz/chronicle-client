import AboutModal from './about-modal';
import { connect } from 'react-redux';
import { logout } from '../actions/login';
import { openAbout } from '../actions/modal';
import React from 'react';
import { withRouter } from 'react-router-dom';
import './top-nav.css';

//Properites from Parent: history from withRouter
//Properties from Redux: dispatch, AboutModal status
//Additional Component Details: Not resuable
export class TopNav extends React.Component{

  handleClick(){
    this.props.dispatch(logout());
    this.props.history.push('/');
  }

  render(){
    return (
      <nav>
        <AboutModal isOpen={this.props.isOpen}/>
        <button onClick={() => this.props.dispatch(openAbout())}><i className="fas fa-question-circle"></i> About</button>
        <button onClick={()=>this.handleClick()}><i className="fas fa-sign-out-alt"></i> Logout</button>
      </nav>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    isOpen : state.modal.aboutOpen
  };
};

export default connect(mapStateToProps)((withRouter)(TopNav));