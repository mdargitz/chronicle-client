import React from 'react';
import{connect} from 'react-redux';
import { getCharacters } from '../actions/character';

export class Characters extends React.Component {

  componentDidMount(){
    this.props.dispatch(getCharacters(3));
  }
  
  render(){
    console.log(this.props);
    return (<div>test</div>);
  }
}

const mapStateToProps = state => {
  return {
    characters : state.characterReducer.characters
  };
};

export default connect(mapStateToProps)(Characters);