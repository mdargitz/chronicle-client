import React from 'react';
import {connect} from 'react-redux';
import StoryCard from './story-card';
import '../detail-list.css';


export class StoryList extends React.Component {

  render () {
    const list = Object.keys(this.props.cards).map((card, index) => {
      return (
        <li key={index}>
          <StoryCard id={card} />
        </li>
      );
    });

    return (
      <div className='detail-list'>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards : state.content.stories
  };
};

export default connect(mapStateToProps)(StoryList);


