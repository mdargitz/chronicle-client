//add new button for stories, characters, plots or settings
import React from 'react';
import {connect} from 'react-redux';
import {createStory} from '../../actions/stories';
import {withRouter} from 'react-router-dom';

export function AddNewStory(props) {

  //TO-DO fix bug that doesnt allow new item if there is one untitled out of order
  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData('addStory');
    // const title = data.get('title');
    // console.log(title);
    const title = document.forms['addStory'].elements['title'].value;
    props.dispatch(createStory(title));
  };

  return (
    <div>
      <p>+</p>
      <form id="addStory" onSubmit={(e) => handleSubmit(e) }>
        <label htmlFor="title" >New Title</label>
        <input required name='title' type="input" id="title"/>
        <button type="submit">Add New</button>
      </form>
      
    </div>
  );

}
const mapStateToProps = state => {
  return {
    stories : state.content.stories
  };
};

export default connect(mapStateToProps)((withRouter)(AddNewStory));