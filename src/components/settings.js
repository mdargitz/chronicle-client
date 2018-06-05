import React from 'react';
import{connect} from 'react-redux';
import {getStories, getSettings} from '../actions/stories';
import Banner from './banner';
import DetailList from './detail-list';
import AddNewDetail from './new-detail';
import mustLogin from './must-login';

export class Settings extends React.Component {
  
  componentDidMount(){
    this.props.dispatch(getStories());
    this.props.dispatch(getSettings(this.props.match.params.storyId));
  }

  render(){
    if (this.props.storyData){
      return (
        <div>
          <Banner type='settings'/>
          <AddNewDetail type='setting' storyId={this.props.match.params.storyId}/>
          <div className='error'>
            {this.props.loading}
            {this.props.error}
          </div>
          <DetailList type='settings' storyId={this.props.match.params.storyId}/>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

const mapStateToProps = (state, props) => {
  return {
    storyData : state.content.stories[props.match.params.storyId],
    loading : state.content.loading,
    error : state.content.error
  };
};

export default mustLogin()(connect(mapStateToProps)(Settings));