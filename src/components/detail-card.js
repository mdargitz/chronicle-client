//reusable card element for characters, settings and plots

import React from 'react';
import {connect} from 'react-redux';
import { deleteCharacter, deleteSetting, deletePlot } from '../actions/stories';
import { openModal} from '../actions/modal';
import EditModal from './edit-modal';
import './detail-card.css';

export class DetailCard extends React.Component {
//needs detail name, detail picture and detail id, detail story id, detail type

  handleDelete(){
    if(this.props.type === 'characters') this.props.dispatch(deleteCharacter(this.props.id, this.props.storyId));
    if(this.props.type === 'settings') this.props.dispatch(deleteSetting(this.props.id, this.props.storyId));
    if(this.props.type === 'plots') this.props.dispatch(deletePlot(this.props.id, this.props.storyId));   
  }

  handleModal(){
    this.props.dispatch(openModal());
  }

  render(){
    return (
      <div className='detail-card'>
        <EditModal type={this.props.type} id={this.props.id} storyId={this.props.storyId}/>
        
        <img src={this.props.img} alt={this.props.name} />
        <div className='card-content'>
          <h3>{this.props.name}</h3>
          <div className='card-icons'> 
            <button onClick={() => this.handleModal()}><i className="fas fa-pencil-alt"></i></button>
            <button onClick={()=> this.handleDelete()}><i className="fas fa-trash-alt"></i></button>
          </div>
        </div>
      </div>
    );
  }
}



export default connect()(DetailCard);