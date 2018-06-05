import React from 'react';
import {connect} from 'react-redux';
import { getStories } from '../../actions/stories';
import StoryList from './story-list';
import AddNewStory from './add-new-story';
import mustLogin from '../must-login';
import Banner from '../banner';
import './stories.css';

export class Stories extends React.Component {
  componentWillMount(){
    this.props.dispatch(getStories());
  }

  render(){
    let loading = <div className='loading'>{this.props.loading}</div>;
    let error = <div className='story-error'>{this.props.error}</div>;

    if (Object.keys(this.props.stories).length > 0 ){
      return (
        <div>
          <Banner type='stories'/>
          <AddNewStory />
          {error}
          {loading}
          <StoryList />
        </div>    
      );
    }
    else {
      return (
        <div>
          <Banner type='stories' />
          <AddNewStory />
          {error}
          {loading}
        </div>
      );
    }
  }}

const mapStateToProps = state => {
  return {
    loading : state.content.loading,
    error : state.content.error,
    stories : state.content.stories
  };
};
export default mustLogin()(connect(mapStateToProps)(Stories));