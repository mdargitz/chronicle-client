//Reusable card for any item
//needs item name & item picture (if exists)
//has button to delete item & button to edit item
//delete button will open model to confirm
//edit button will open model with item form

import React from 'react';
import {connect} from 'react-redux';

export function Card(props) {
  console.log(props);
  return(
    <div>
      test
      {/* <img src={props.img} alt={props.alt} />
      <h3>{props.name}</h3>
      <button /> */}
    </div>
  )
}

//should be able to pull storyId from router, check docs
const mapStateToProps = (state, props) => {
  //grab 
return {
  // name : state[storyId][character/plot/general - passed by parent][passed by parent]
}

};

export default connect(mapStateToProps)(Card);
