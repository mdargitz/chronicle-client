import React from 'react';
import{connect} from 'react-redux';
import {getStories, getPlots} from '../actions/stories';
import Banner from './banner';
import DetailList from './detail-list';
import AddNewDetail from './new-detail';
import mustLogin from './must-login';

export class Plots extends React.Component {
  
  componentDidMount(){
    this.props.dispatch(getStories());
    this.props.dispatch(getPlots(this.props.match.params.storyId));
  }

  render(){
    if (this.props.storyData){
      return (
        <div>
          <Banner type='plots'/>
          <AddNewDetail type='plot' storyId={this.props.match.params.storyId} />
          <DetailList type='plots' storyId={this.props.match.params.storyId}/>
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

export default mustLogin()(connect(mapStateToProps)(Plots));