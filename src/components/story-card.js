//Reusable card for any item
//needs item name & item picture (if exists)
//has button to delete item & button to edit item
//delete button will open model to confirm
//edit button will open model with item form

import React from 'react';
import {connect} from 'react-redux';

export class StoryCard extends React.Component {

  render() {
    console.log(this.props.id);

    const title = this.props.story.title;
    const img = this.props.story.img;

    return(
      <div>
        <img src={img} alt={`${title} banner image`} />
        <h3>{title}</h3>
        <button />
      </div>
    );
  }
  
}

//should be able to pull storyId from router, check docs

const mapStateToProps = (state, props) => {
  console.log(props.id);
  return {
    story : state.content.stories[props.id]
  };};

export default connect(mapStateToProps)(StoryCard);
