
import React from 'react';
import {connect} from 'react-redux';
import {createStory} from '../../actions/stories';
import '../new-detail.css';

export function AddNewStory(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = document.forms['addStory'].elements['title'].value;
    props.dispatch(createStory(title));
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
const mapStateToProps = state => {
  return {
    stories : state.content.stories
  };
};

export default connect(mapStateToProps)(AddNewStory);