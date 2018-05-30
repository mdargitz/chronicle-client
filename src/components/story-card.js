//Reusable card for any item
//needs item name & item picture (if exists)
//has button to delete item & button to edit item
//delete button will open model to confirm
//edit button will open model with item form

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteStory} from '../actions/stories';

export class StoryCard extends React.Component {

  render() {

    const title = this.props.story.title;
    const img = this.props.story.picture;
    const redirectLink =`/stories/${this.props.id}`;

    return(
      <div>
        <img src={img} alt={`${title} banner image`} />
        <h3>{title}</h3>
        <Link to={redirectLink}>
          <button>Edit</button>
        </Link>
        <button onClick={() => this.props.dispatch(deleteStory(this.props.id))}>Delete</button>
      </div>
    );
  }
  
}

const mapStateToProps = (state, props) => {
  return {
    story : state.content.stories[props.id]
  };};

export default connect(mapStateToProps)(StoryCard);
