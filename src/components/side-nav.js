import React from 'react';
import {withRouter} from 'react-router-dom';
import './side-nav.css';
import { navigateTo } from '../actions/navigation';
import {connect} from 'react-redux';

export function SideNav(props) {
  const {storyId} = props.match.params;
  const options = ['Characters', 'Settings', 'Plots', 'General'];
  const displayedLink = props.display;
  const optionLinks = options.filter(option => option !== props.display);
  

  const optionElems = optionLinks.map((link, index) => {
    return (<option key={index} value={link}>
      {link}
    </option>);});

  const handleChange = selected => {
    selected = selected.toLowerCase();


    if(selected === 'back'){
      props.history.push('/stories/');
    }
    else if (selected === 'general') {
      props.dispatch(navigateTo('General'));
      props.history.push(`/stories/${storyId}`);
    }
      
    else {
      props.dispatch(navigateTo(selected));
      props.history.push(`/stories/${storyId}/${selected}`);
    }
  };
 
  return (
    <form className='side-nav'>
      <select id='link' onChange={(e) => handleChange(e.target[e.target.selectedIndex].value)}> 
        <option hidden>{displayedLink}</option>
        {optionElems}
        <option value='back'>Back to All Stories</option>
      </select>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {display : state.navigation.path};
};

export default connect(mapStateToProps)(withRouter(SideNav));