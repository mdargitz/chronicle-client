import React from 'react';
import {withRouter} from 'react-router-dom';
import './side-nav.css';

export function SideNav(props) {
  const {storyId} = props.match.params;
  const options = ['Characters', 'Settings', 'Plots', 'General'];
  const displayedLink = options.find(option => props.location.pathname.includes(option.toLowerCase()));
  const optionLinks = options.filter(option => !props.location.pathname.includes(option.toLowerCase()));

  const optionElems = optionLinks.map((link, index) => {
    return (<option key={index} value={link}>
      {link}
    </option>);});

  const handleChange = selected => {
    selected = selected.toLowerCase();
    if (selected === 'general') props.history.push(`/stories/${storyId}`);
    else props.history.push(`/stories/${storyId}/${selected}`);
  };
 
  return (
    <form>
      <select id='link' onChange={(e) => handleChange(e.target[e.target.selectedIndex].value)}> 
        <option hidden>{displayedLink}</option>
        {optionElems}
      </select>
    </form>
  );
}

export default withRouter(SideNav);