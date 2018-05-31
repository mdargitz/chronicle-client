import React from 'react';
import{connect} from 'react-redux';
import {getStories, getSettings} from '../actions/stories';
import Banner from './banner';
import DetailList from './detail-list';
import AddNewDetail from './new-detail';

export class Settings extends React.Component {
  
  componentDidMount(){
    this.props.dispatch(getStories());
    this.props.dispatch(getSettings(this.props.match.params.storyId));
  }

  render(){
    if (this.props.storyData){
      return (
        <div>
          <h1>Settings</h1>
          <Banner />
          <AddNewDetail type='setting' storyId={this.props.match.params.storyId} />
          <DetailList type='settings' storyId={this.props.match.params.storyId}/>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

const mapStateToProps = (state, props) => {
  return {
    storyData : state.content.stories[props.match.params.storyId]
  };
};

export default connect(mapStateToProps)(Settings);