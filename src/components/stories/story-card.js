import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteStory} from '../../actions/stories';
import '../detail-card.css';

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
              <button><i className="fas fa-pencil-alt"></i></button>
            </Link>
            <button onClick={() => this.props.dispatch(deleteStory(this.props.id))}><i className="fas fa-trash-alt"></i></button>
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
