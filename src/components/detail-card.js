//reusable card element for characters, settings and plots

import React from 'react';
import {connect} from 'react-redux';
import { deleteCharacter, deleteSetting, deletePlot } from '../actions/stories';
import { openModal} from '../actions/modal';
import EditModal from './edit-modal';


export class DetailCard extends React.Component {
//needs detail name, detail picture and detail id, detail story id, detail type

  handleDelete(){
    if(this.props.type === 'characters') this.props.dispatch(deleteCharacter(this.props.id, this.props.storyId));
    if(this.props.type === 'settings') this.props.dispatch(deleteSetting(this.props.id, this.props.storyId));
    if(this.props.type === 'plots') this.props.dispatch(deletePlot(this.props.id, this.props.storyId));   
  }

  handleModal(){
    console.log('I been clicked');
    this.props.dispatch(openModal());
  }

  render(){
    return (
      <div>
        <EditModal type={this.props.type} id={this.props.id} storyId={this.props.storyId}/>
        
        <img src={this.props.img} alt={this.props.name} />
        <h3>{this.props.name}</h3>
        <button onClick={() => this.handleModal()}>Edit</button>
        <button onClick={()=> this.handleDelete()}>Delete</button>
      </div>
    );
  }
}



export default connect()(DetailCard);