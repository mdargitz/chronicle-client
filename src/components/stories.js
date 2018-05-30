import React from 'react';
import {connect} from 'react-redux';
import { getStories } from '../actions/stories';
import StoryList from './story-list';
import AddNewStory from './add-new-story';
import mustLogin from './must-login';

export class Stories extends React.Component {
  componentWillMount(){
    this.props.dispatch(getStories());
  }

  render(){

    if (this.props.loading){
      return <div>Loading...</div>;
    }

    if (this.props.error) {
      return <div>Uh oh! Something went wrong: {this.props.error}</div>;
    }

    if (Object.keys(this.props.stories).length > 0 ){
      return (
        <div>
          <h1>HOME!</h1>
          <AddNewStory />
          <StoryList />
        </div>    
      );
    }
    //TO DO- render the list always, just dont have anything if object is empty
    return (
      <div>
        <h1>HOME!</h1>
        <AddNewStory />
      </div> );
       
  }}

const mapStateToProps = state => {
  return {
    loading : state.content.loading,
    error : state.content.error,
    stories : state.content.stories
  };
};
export default mustLogin()(connect(mapStateToProps)(Stories));