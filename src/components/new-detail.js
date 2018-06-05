import { connect } from 'react-redux';
import { createCharacter, createSetting, createPlot } from '../actions/stories';
import React from 'react';
import './new-detail.css';

//Properites from Parent: type (may be 'characters', 'settings', 'plots'), storyID
//Properties from Redux: dispatch
//Additional Component Details: Reusable
export function AddNewDetail(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.forms['new ' + props.type + ' form'].elements[props.type + ' name'].value;
    if(props.type === 'character') props.dispatch(createCharacter(name, props.storyId));
    if(props.type === 'setting') props.dispatch(createSetting(name, props.storyId));
    if(props.type === 'plot') props.dispatch(createPlot(name, props.storyId));
    document.forms['new ' + props.type + ' form'].reset();    
  };

  return (
    <div className="new-detail">
      <div className="new-detail-container">
        <i className="fas fa-plus-circle"></i>
        <form id={'new ' + props.type + ' form'} onSubmit={(e) => handleSubmit(e) }>
          <label htmlFor={props.type + ' name'}  >New {props.type}</label>
          <input aria-label={props.type + ' name'}  required name={props.type + ' name'} type="input" id={'new ' + props.type + ' name'} placeholder={`Type a new ${props.type} name here...`}/>
          <button type="submit">Create!</button>
        </form>
      </div>
    </div>
  );

}

export default connect()(AddNewDetail);