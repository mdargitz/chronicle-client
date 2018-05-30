import React from 'react';
import {Link} from 'react-router-dom';

export default function SideNav(props) {
  const {storyId} = props.match.params;
  return (
    <div>
      <Link to={'/stories/' + storyId} >General</Link>
      <Link to={'/stories/' + storyId + '/characters'} >Characters</Link>
      <Link to={'/stories/' + storyId + '/settings'} >Settings</Link>
      <Link to={'/stories/' + storyId + '/plots'} >Plots</Link>
      <Link to='/stories/' >Back to All Stories</Link>
    </div>
  );
}