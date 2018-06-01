import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/login';
import {withRouter} from 'react-router-dom';
import AboutModal from './about-modal';
import {openAbout } from '../actions/modal';
import './top-nav.css';

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
}

export default connect(mapStateToProps)((withRouter)(TopNav));