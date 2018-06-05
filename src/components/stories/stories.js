import AddNewStory from './add-new-story';
import Banner from '../banner';
import {connect} from 'react-redux';
import { getStories } from '../../actions/stories';
import mustLogin from '../must-login';
import React from 'react';
import StoryList from './story-list';
import './stories.css';

//Properites from Parent: none
//Properties from Redux: all stories details, loading & error states produced by getStories async action
//Additional Component Details: Protected by login, not resuable
export class Stories extends React.Component {
  componentWillMount(){
    this.props.dispatch(getStories());
  }

  render(){
    const loading = <div className='loading'>{this.props.loading}</div>;
    const error = <div className='story-error'>{this.props.error}</div>;
    const totalStories = Object.keys(this.props.stories).length;

    if (totalStories > 0 ){
      return (
        <div>
          <header role='banner'>
            <Banner type='stories'/>
          </header>
          <main role='main'>
            <section>
              <AddNewStory />
            </section>
            <section>
              <h2 className='total-stories' aria-live='assertive'>Total Stories: {totalStories}</h2>
              {error}
              {loading}
              <StoryList />
            </section>
          </main>
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