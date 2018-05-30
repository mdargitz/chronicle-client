//add new button for stories, characters, plots or settings
import React from 'react';
import {connect} from 'react-redux';
import {createStory} from '../actions/stories';

export function AddNewStory(props) {

  //TO-DO fix bug that doesnt allow new item if there is one untitled out of order
  let untitledCount = 0;
  (Object.entries(props.stories)).forEach(story => {
    if (story[1].title.includes('Untitled')){
      untitledCount ++;
    }
  });

  let defaultTitle = '';
  if(untitledCount === 0){
    defaultTitle = 'Untitled';
  }
  else {
    defaultTitle = `Untitled${untitledCount}`;
  }

  return (
    <div>
      <p>+</p>
      <button onClick={()=> props.dispatch(createStory(defaultTitle))}>Add New</button>
    </div>
  );

}
const mapStateToProps = state => {
  return {
    stories : state.content.stories
  };
};

export default connect(mapStateToProps)(AddNewStory);