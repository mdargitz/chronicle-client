import React from 'react';
import {connect} from 'react-redux';
import { createCharacter, createSetting, createPlot } from '../actions/stories';

//get type & storyId from parent
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
    <div>
      <p>+</p>
      <form id={'new ' + props.type + ' form'} onSubmit={(e) => handleSubmit(e) }>
        <label htmlFor="title" >New {props.type}</label>
        <input required name={props.type + ' name'} type="input" id={props.type + ' name'}/>
        <button type="submit">Add New</button>
      </form>
      
    </div>
  );

}

export default connect()(AddNewDetail);