import {connect} from 'react-redux';
import { deleteCharacter, deleteSetting, deletePlot } from '../actions/stories';
import EditModal from './edit-modal';
import { openModal} from '../actions/modal';
import React from 'react';
import './detail-card.css';

//Properites from Parent: 'type' which may be 'characters', 'settings' or 'plots', 
//detail name, detail picture, detail ID & story ID to which it belongs 
//Properties from Redux: dispatch
//Additional Component Details: Reusable
export class DetailCard extends React.Component {

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
        <section>
          <EditModal type={this.props.type} id={this.props.id} storyId={this.props.storyId}/>
        </section>
        <section>
          <img src={this.props.img} alt={this.props.name +' character icon or picture'} />
          <div className='card-content'>
            <h2>{this.props.name}</h2>
            <div className='card-icons'> 
              <button onClick={() => this.handleModal()}><i className="fas fa-pencil-alt" aria-label={'edit ' + this.props.name}></i></button>
              <button onClick={()=> this.handleDelete()}><i className="fas fa-trash-alt" aria-label={'delete ' + this.props.name}></i></button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}



export default connect()(DetailCard);