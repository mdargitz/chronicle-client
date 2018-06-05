import {connect} from 'react-redux';
import React from 'react';
import StoryCard from './story-card';
import '../detail-list.css';

//Properites from Parent: none
//Properties from Redux: all story details
//Additional Component Details: Not resuable
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


