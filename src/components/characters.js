import React from 'react';
import{connect} from 'react-redux';

export class Characters extends React.Component {
  
  render(){
    return (<div>Characters</div>);
  }
}

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps)(Characters);