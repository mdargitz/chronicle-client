import React from 'react';
import {connect} from 'react-redux';
import { getStories } from '../actions/stories';
// import Card from './card';
import StoryList from './story-list';

export class Stories extends React.Component {
  componentWillMount(){
    // console.log('getting stories');
    this.props.dispatch(getStories());
  }

  render(){
    console.log('I am rendering! My story status is: ' , this.props.stories, 'and loading is', this.props.loading);
    if (this.props.loading){
      return <div>Loading...</div>;
    }

    if (this.props.error) {
      return <div>Uh oh! Something went wrong: {this.props.error}</div>;
    }

    if (Object.keys(this.props.stories).length > 0 ){
      // console.log('This props stories is now' + this.props.stories);
      return (
        <div>
          <h1>HOME!</h1>
          <StoryList />
          {/* <Card type="stories" id="3"/> */}
        </div>    
      );
    }
    return <div />;

  }}

const mapStateToProps = state => {
  return {
    loading : state.content.loading,
    error : state.content.error,
    stories : state.content.stories
  };
};
export default connect(mapStateToProps)(Stories);