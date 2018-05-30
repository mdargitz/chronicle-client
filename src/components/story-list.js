//Reusable componenet for all listings of items
//needs prop to explain which list to render

import React from 'react';
import {connect} from 'react-redux';
import StoryCard from './story-card';


export class StoryList extends React.Component {

  render () {
    console.log(this.props);
    const list = Object.keys(this.props.cards).map((card, index) => {
      console.log(card);
      return (
        <li key={index}>
          <StoryCard id={card} />
        </li>
      );
    });

    return (
      <ul>
        {list}
      </ul>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    cards : state.content.stories
  };
};

export default connect(mapStateToProps)(StoryList);


