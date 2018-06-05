import {connect} from 'react-redux';
import {createStory} from '../../actions/stories';
import React from 'react';
import '../new-detail.css';

//Properites from Parent: none
//Properties from Redux: dispatch
//Additional Component Details: not resuable
export function AddNewStory(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = document.forms['addStory'].elements['title'].value;
    props.dispatch(createStory(title));
    document.forms['addStory'].reset();
  };

  return (
    <div className='new-detail'>
      <div className="new-detail-container">
        <i className="fas fa-plus-circle"></i>
        <form id="addStory" onSubmit={(e) => handleSubmit(e) }>
          <label htmlFor="title" >New Title</label>
          <input required name='title' type="input" id="title" placeholder='new story title' aria-label='title'/>
          <button type="submit">Add New</button>
        </form>
      </div>
    </div>
  );

}

export default connect()(AddNewStory);