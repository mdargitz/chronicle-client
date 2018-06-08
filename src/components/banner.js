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
    bgimg = 'https://farm8.staticflickr.com/7085/6997079424_1fb2fc54d2_c.jpg';
    header = 'Characters';
  }
  if(props.type === 'settings'){
    bgimg = 'https://farm2.staticflickr.com/1558/24183046109_29594c9486_c.jpg';
    header = 'Settings';
  }
  if(props.type === 'plots'){
    bgimg= 'https://farm1.staticflickr.com/889/27562601448_766e862dd2_c.jpg';
    header = 'Plot Points';
  }
  if (props.type === 'stories'){
    bgimg = 'https://farm4.staticflickr.com/3947/33543263882_4d21a9137e_c.jpg';
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