//reusable card element for characters, settings and plots

import React from 'react';
import {connect} from 'react-redux';
import { deleteCharacter, deleteSetting, deletePlot } from '../actions/stories';

export class DetailCard extends React.Component {
//needs detail name, detail picture and detail id, detail story id, detail type
  handleDelete(){
    if(this.props.type === 'characters') this.props.dispatch(deleteCharacter(this.props.id, this.props.storyId));
    if(this.props.type === 'settings') this.props.dispatch(deleteSetting(this.props.id, this.props.storyId));
    if(this.props.type === 'plots') this.props.dispatch(deletePlot(this.props.id, this.props.storyId));   
  }

  render(){
    return (
      <div>
        <img src={this.props.img} alt={this.props.name} />
        <h3>{this.props.name}</h3>
        <button>Edit</button>
        <button onClick={()=> this.handleDelete()}>Delete</button>
      </div>
    );
  }
}

export default connect()(DetailCard);