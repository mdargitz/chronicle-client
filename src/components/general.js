import Banner from './banner';
import {connect} from 'react-redux';
import DetailsForm from './details-form';
import { getStories } from '../actions/stories';
import mustLogin from './must-login';
import React from 'react';
import './general.css';

//Properites from Parent: ROUTE information, StoryID
//Properties from Redux: dispatch, general story information for associated ID
//Additional Component Details:Secured by login, not reusable
export class General extends React.Component {
  componentWillMount(){
    this.props.dispatch(getStories());
  }

  render() {
    if (this.props.story) {
      return (
        <div>
          <header role='banner'>
            <Banner 
              storyImg={this.props.story.picture} 
              storyTitle={this.props.story.title} 
              storyDescription={this.props.story.description} />
          </header>
          <main>
            <section>
              <p className='directions'>Click an empty space to add a detail or an existing detail to change it!</p>
              {this.props.error}
              {this.props.loading}
            </section>
            <section>
              <DetailsForm id={this.props.match.params.storyId} 
                fields={[{name : 'title',
                  label : 'Title',
                  placeholder: this.props.story.title}, 
                {name : 'description',
                  label : 'Overall Description',
                  placeholder: this.props.story.description,
                  element: 'textarea'},
                {name : 'picture',
                  label : 'Picture URL',
                  placeholder: this.props.story.picture},
                {name : 'genre',
                  label : 'Genre',
                  placeholder: this.props.story.genre},
                {name : 'period',
                  label : 'Time Period',
                  placeholder: this.props.story.period},
                {name : 'plotsummary',
                  label : 'Plot Summary',
                  placeholder: this.props.story.plotsummary,
                  element: 'textarea'},
                {name : 'settingsummary',
                  label : 'Setting Summary',
                  placeholder: this.props.story.settingsummary,
                  element: 'textarea'}]} 
                form="general"/>
            </section>
          </main>
        </div>
      );
    }
    return <div>Loading...</div>;
    
  }
  
}

const mapStateToProps = (state, props) => {
  return {
    story : state.content.stories[props.match.params.storyId],
    loading : state.content.loading,
    error : state.content.error
  };
};

export default mustLogin()(connect(mapStateToProps)(General));