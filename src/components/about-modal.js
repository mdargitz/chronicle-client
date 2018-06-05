import {closeAbout} from '../actions/modal';
import React from 'react';
import ReactModal from 'react-modal';
import {connect} from 'react-redux';
import './about-modal.css';

//Properites from Parent: none
//Properties from Redux: aboutOpen modal status, dispatch
//Additional Component Details: Used in login screen and in topNav
export function AboutModal(props){
  return (
    <ReactModal 
      isOpen={props.isOpen}
      onRequestClose={() => props.dispatch(closeAbout())}
      contentLabel={'About Chronicle'}
      appElement={document.getElementById('root')}
    >
      <div className='about-content'>
        <header>
          <h1>Planner, Manager, Builder</h1>
        </header>
        <section>
          <p>The writing process from author to author is as different as the stories themselves.</p>
          <p>While some writers prefer to build their worlds on the fly, others may plan every pebble.</p>
          <p>Chronicle seeks to assist everyone on this spectrum, by providing a centralized hub for all your thoughts, notes and concepts.</p>
          <p>Use Chronicle to plan your stories, to manage what you already have and to see what areas need greater detail</p>
          <h2>Happy Writing~!</h2>
          <button className='about-button' onClick={()=> props.dispatch(closeAbout())}>Got it!</button>
        </section>
      </div>
    </ReactModal>
  );
}

const mapStateToProps = state => {
  return {
    isOpen : state.modal.aboutOpen
  };
};

export default connect(mapStateToProps)(AboutModal);