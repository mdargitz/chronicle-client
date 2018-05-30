//add new button for stories, characters, plots or settings
import React from 'react';
import {connect} from 'react-redux';

export function AddNew() {
  return (
    <div>
      <p>+</p>
      <p>Add New</p>
    </div>
  );

}

export default connect()(AddNew);