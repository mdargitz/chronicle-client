//reusable list element for characters, settings and plots

import React from 'react';
import {connect} from 'react-redux';
import DetailCard from './detail-card';

export class DetailList extends React.Component {
  render(){
    let characters = [];
    
    if(this.props.characters){
      characters= this.props.characters.map((character,index) => {
        return (
          <li key={index}>
            <DetailCard img={character.picture} name={character.name} id={character.id} />
          </li>);
      });

      return(
        <div>
          <ul>
            <li>add new detail will go here</li>
            {characters}
          </ul>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

const mapStateToProps = (state, props) => {
  return {
    characters : state.content.stories[props.storyId][props.type]
  };
};

export default connect(mapStateToProps)(DetailList);