import {connect} from 'react-redux';
import {deleteStory} from '../actions/stories';
import {Link} from 'react-router-dom';
import React from 'react';
import './detail-card.css';

//Properites from Parent: id of specific story
//Properties from Redux: story details of specified ID
//Additional Component Details: Not resuable
export class StoryCard extends React.Component {

  render() {

    const title = this.props.story.title;
    const img = this.props.story.picture;
    const redirectLink =`/stories/${this.props.id}`;

    return(
      <div className='detail-card'>
        <img src={img} alt={`${title} banner`} />
        <div className='card-content'>
          <h3>{title}</h3>
          <div className='card-icons'>
            <Link to={redirectLink}>
              <button><i className="fas fa-pencil-alt" aria-label={'edit' + title}></i></button>
            </Link>
            <button onClick={() => this.props.dispatch(deleteStory(this.props.id))}><i className="fas fa-trash-alt" aria-label={'delete ' + title}></i></button>
          </div>
        </div>
      </div>
    );
  }
  
}

const mapStateToProps = (state, props) => {
  return {
    story : state.content.stories[props.id]
  };};

export default connect(mapStateToProps)(StoryCard);
