import React from 'react';

export default function Banner(props){
  //if storyImg passed, will use that as background, otherwise use type to determine background
  let bgimg = props.storyImg || '';
  let header = props.storyTitle;
  let description = props.storyDescription || null; 

  if (props.type === 'characters'){
    bgimg = 'https://image.freepik.com/free-photo/two-people-yawning-at-a-time_1187-1200.jpg';
    header = 'Characters';
  }
  if(props.type === 'settings'){
    bgimg = 'https://media-cdn.tripadvisor.com/media/photo-s/10/f1/cf/9c/fantasy-landscape.jpg';
    header = 'Settings';
  }
  if(props.type === 'plots'){
    bgimg= 'https://images.crateandbarrel.com/is/image/Crate/OregonBigRedWine21ozSHF15/?$web_product_hero$&150817110052&wid=625&hei=625';
    header = 'Plot Points';
  }
  if (props.type === 'stories'){
    bgimg = 'https://images.unsplash.com/photo-1518186647934-bf014153e202?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a59692a7c1108955e3a5db78e427bf7&auto=format&fit=crop&w=1050&q=80';
    header = 'Chronicle';
    description = 'Add one or more stories below and get writing!';
  }


  return (
    <div>
      <img src={bgimg} alt={props.type + 'banner'} />
      <h1>{header}</h1>
      <h2>{description}</h2>
    </div>);
}