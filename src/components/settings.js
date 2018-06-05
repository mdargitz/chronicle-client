import AddNewDetail from './new-detail';
import Banner from './banner';
import{connect} from 'react-redux';
import DetailList from './detail-list';
import {getStories, getSettings} from '../actions/stories';
import mustLogin from './must-login';
import React from 'react';


//Properites from Parent: (from ROUTE) -storyID
//Properties from Redux: all story data for specified ID, loading & error information from asych actions
//Additional Component Details: Protected by login, not resuable
export class Settings extends React.Component {
  
  componentDidMount(){
    this.props.dispatch(getStories());
    this.props.dispatch(getSettings(this.props.match.params.storyId));
  }

  render(){
    //check that asyc fetch is complete
    if (this.props.storyData){
      return (
        <div>
          <header role='banner'>
            <Banner type='settings'/>
          </header>
          <main>
            <section>
              <AddNewDetail type='setting' storyId={this.props.match.params.storyId}/>
            </section>
            <section>
              <div className='error'>
                {this.props.loading}
                {this.props.error}
              </div>
              <DetailList type='settings' storyId={this.props.match.params.storyId}/>
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
    storyData : state.content.stories[props.match.params.storyId],
    loading : state.content.loading,
    error : state.content.error
  };
};

export default mustLogin()(connect(mapStateToProps)(Settings));