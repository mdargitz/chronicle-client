import React from 'react';
import './banner.css';

//Properites from Parent: 'type' which may be 'characters', 'settings' or 'plots'
//Properties from Redux: none
//Additional Component Details: Reusable
export default function Banner(props){
  //if storyImg passed, will use that as background, otherwise use type to determine background
  let bgimg = props.storyImg || '';
  let header = props.storyTitle;
  let description;
  props.storyDescription ? description = <h2>{props.storyDescription}</h2> : description = null;

  if (props.type === 'characters'){
    bgimg = 'https://image.ibb.co/gMt7YJ/Webp_net_resizeimage.jpg';
    header = 'Characters';
  }
  if(props.type === 'settings'){
    bgimg = 'https://image.ibb.co/eX6pfy/Webp_net_resizeimage_1.jpg';
    header = 'Settings';
  }
  if(props.type === 'plots'){
    bgimg= 'https://image.ibb.co/hpX9DJ/Webp_net_resizeimage_2.jpg';
    header = 'Plot Points';
  }
  if (props.type === 'stories'){
    bgimg = 'https://image.ibb.co/gyKQQ8/Webp_net_resizeimage_5.jpg';
    header = 'Chronicle';
    description = 'Add one or more stories below and get writing!';
  }


  return (
    <div className="banner" style={{backgroundImage : `url(${bgimg})`}}>
      <div className="content-container"> 
        <h1>{header}</h1>
        {description}
      </div>
    </div>);
}