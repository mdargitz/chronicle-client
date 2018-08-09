import React from 'react';
import ReactModal from 'react-modal';
import {connect} from 'react-redux';
import {closeModal} from '../actions/modal';
import DetailsForm from './details-form';
import './edit-modal.css';

//Properites from Parent: ID of item, 
//type of item (may be 'characters', 'settings', or 'plots'), 
//associated story ID 
//Properties from Redux: dispatch, editModal open status, item details (for placeholders)
//Additional Component Details:React-Modal, Reusable
export function EditModal(props){

  let item = props.items[0];

  if (props.itemId !== null){
    item = props.items.filter(item => item.id === props.itemId)[0];
  }
  

  let formFields = [];
  let initialValues ={};

  if (props.type === 'characters'){
    
    initialValues['name-' + item.name] = item.name;
    initialValues['age-' + item.name] = item.age;
    initialValues['occupation-' + item.name] = item.occupation;
    initialValues['description-' + item.name] = item.description;
    initialValues['personality-' + item.name] = item.personality;
    initialValues['background-' + item.name] = item.background;   

    formFields = [
      {name: 'name-' + item.name,
        label: 'Name',
        placeholder: item.name},
      {name: 'age-' + item.name,
        label: 'Age',
        placeholder: item.age},
      {name: 'occupation-' + item.name,
        label: 'Occupation',
        placeholder: item.occupation},
      {name: 'description-' + item.name,
        label: 'Description',
        placeholder: item.description,
        element: 'textarea'},
      {name: 'personality-' + item.name,
        label: 'Personality',
        placeholder: item.personality,
        element: 'textarea'},
      {name: 'background-' + item.name,
        label: 'Background',
        placeholder: item.background,
        element: 'textarea'},
      {name: 'picture- ' + item.name,
        label: 'Image URL',
        placeholder: item.picture}
    ];
  }

  else{
    initialValues['name-' + item.name] = item.name;
    initialValues['description-' + item.name] = item.description;
    initialValues['notes-' + item.name] = item.notes; 

    formFields = [
      {name: 'name-' + item.name,
        label: 'Name',
        placeholder: item.name},
      {name: 'description-' + item.name,
        label: 'Description',
        placeholder: item.description,
        element: 'textarea'},
      {name: 'notes-' + item.name,
        label: 'Notes',
        placeholder: item.notes,
        element: 'textarea'},
      {name: 'picture-' + item.name,
        label: 'Image URL',
        placeholder: item.picture}
    ];
  }  

  return (

    <ReactModal 
      isOpen={props.isOpen}
      onRequestClose={() => props.dispatch(closeModal())}
      contentLabel={'Edit details'}
      shouldFocusAfterRender={true}
      shouldCloseOnOverlayClick={false}
      appElement={document.getElementById('root')}
    >
      <section>
        <h2>Updating &apos;{item.name}&apos;</h2> 
        {props.loading}
        {props.error}
      </section>
      <section>
        <DetailsForm 
          form={'edit' + props.type}
          fields={formFields}
          storyId={props.storyId}
          id={props.itemId}
          initialValues={initialValues}
        />
        <button className='cancel-btn' onClick={()=> props.dispatch(closeModal())}>Cancel</button>
      </section>
    </ReactModal>
  );
}

const mapStateToProps = (state, props) => {
  return {
    isOpen : state.modal.isOpen,
    items : state.content.stories[props.storyId][props.type],
    itemId : state.modal.id,
    error : state.content.error,
    loading : state.content.loading
  };
};

export default connect(mapStateToProps)(EditModal);