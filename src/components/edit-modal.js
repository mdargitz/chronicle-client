import React from 'react';
import ReactModal from 'react-modal';
import {connect} from 'react-redux';
import {closeModal} from '../actions/modal';
import DetailsForm from './details-form';
import './edit-modal.css';

export function EditModal(props){
//needs storyId, itemId, type

  const item = props.items.filter(item => item.id === props.id)[0];

  let formFields = [];

  if (props.type === 'characters'){
    formFields = [
      {name: 'name',
        label: 'Name',
        placeholder: item.name},
      {name: 'age',
        label: 'Age',
        placeholder: item.age},
      {name: 'occupation',
        label: 'Occupation',
        placeholder: item.occupation},
      {name: 'description',
        label: 'Description',
        placeholder: item.description,
        element: 'textarea'},
      {name: 'personality',
        label: 'Personality',
        placeholder: item.personality,
        element: 'textarea'},
      {name: 'background',
        label: 'Background',
        placeholder: item.background,
        element: 'textarea'},
      {name: 'picture',
        label: 'Image URL',
        placeholder: item.picture}
    ];
  }

  else{
    formFields = [
      {name: 'name',
        label: 'Name',
        placeholder: item.name},
      {name: 'description',
        label: 'Description',
        placeholder: item.description,
        element: 'textarea'},
      {name: 'notes',
        label: 'Notes',
        placeholder: item.notes,
        element: 'textarea'},
      {name: 'picture',
        label: 'Image URL',
        placeholder: item.picture}
    ];
  }
  

  return (
    <ReactModal 
      isOpen={props.isOpen}
      onRequestClose={() => props.dispatch(closeModal())}
      contentLabel={'Edit details for '}
      shouldFocusAfterRender={true}
      shouldCloseOnOverlayClick={false}
      appElement={document.getElementById('root')}
    >
      <h2>Updating &apos;{item.name}&apos;</h2> 
      {props.loading}
      {props.error}
      <DetailsForm 
        form={'edit' + props.type}
        fields={formFields}
        storyId={props.storyId}
        id={props.id}/>
      <button className='cancel-btn' onClick={()=> props.dispatch(closeModal())}>Cancel</button>
    </ReactModal>
  );
}

const mapStateToProps = (state, props) => {
  return {
    isOpen : state.modal.isOpen,
    items : state.content.stories[props.storyId][props.type],
    error : state.content.error,
    loading : state.content.loading
  };
};

export default connect(mapStateToProps)(EditModal);