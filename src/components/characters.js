import React from 'react';
import{connect} from 'react-redux';
import {getStories, getCharacters} from '../actions/stories';
import Banner from './banner';
import DetailList from './detail-list';

export class Characters extends React.Component {
  
  componentWillMount(){
    this.props.dispatch(getStories());
    this.props.dispatch(getCharacters(this.props.match.params.storyId));
  }

  render(){
    return (
      <div>
        <h1>Characters </h1>
        {/* <Banner /> */}
        {/* <DetailList type='characters' /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps)(Characters);