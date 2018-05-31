import React from 'react';
import {connect} from 'react-redux';
import { getStories } from '../../actions/stories';
import DetailsForm from '../details-form';
//gets storyID & characterId from card component that is used to bring it up
export class CharacterModal extends React.Component {
  componentWillMount(){
    this.props.dispatch(getStories());
  }

  render() {
    if (this.props.character) {
      return (
        <div>
          <DetailsForm id={this.storyId} 
            fields={[{name : 'name',
              label : 'Name(s)',
              placeholder: this.props.character.name}, 
            {name : 'description',
              label : 'Overall Description',
              placeholder: this.props.character.description},
            {name : 'picture',
              label : 'Picture URL',
              placeholder: this.props.character.picture},
            {name : 'age',
              label : 'Age',
              placeholder: this.props.character.age},
            {name : 'occupation',
              label : 'Occupation',
              placeholder: this.props.character.occupation},
            {name : 'personality',
              label : 'Personality',
              placeholder: this.props.character.personality},
            {name : 'background',
              label : 'Background',
              placeholder: this.props.character.background}]} 
            form="character"/>
        </div>
      );
    }
    return <div>Loading...</div>;
    
  }
  
}

const mapStateToProps = (state, props) => {
  return {character : state.content.stories[props.storyId].characters[props.characterId]};
};

export default connect(mapStateToProps)(CharacterModal);