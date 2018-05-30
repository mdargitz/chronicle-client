//reusable card element for characters, settings and plots

import React from 'react';
import {connect} from 'react-redux';

export class DetailCard extends React.Component {
//needs detail name, detail picture and detail id
//get id from parent
  render(){
    return (
      <div>
        DetailCardHere
      </div>
    );
  }
}

export default connect()(DetailCard);