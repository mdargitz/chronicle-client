import React from 'react';
import ReactModal from 'react-modal';
import {closeAbout} from '../actions/modal';
import {connect} from 'react-redux';

export function AboutModal(props){
  console.log(props.isOpen)
  return (
    <ReactModal 
      isOpen={props.isOpen}
      onRequestClose={() => props.dispatch(closeAbout())}
      contentLabel={'About Chronicle'}
      appElement={document.getElementById('root')}
    >
      <h1>Chronicle Helps You Plan Stories, Build Worlds and Finish that Novel!</h1>
      <p>Some more info will go here</p>
      <button onClick={()=> props.dispatch(closeAbout())}>Got it! Close this window</button>
    </ReactModal>
  );
}

const mapStateToProps = state => {
  return {
    isOpen : state.modal.aboutOpen
  };
};

export default connect(mapStateToProps)(AboutModal);