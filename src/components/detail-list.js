//reusable list element for characters, settings and plots

import React from 'react';
import {connect} from 'react-redux';
import DetailCard from './detail-card';

export class DetailList extends React.Component {
  render(){
    let items = [];  
    if(this.props.items){
      items= this.props.items.map((item,index) => {
        return (
          <li key={index}>
            <DetailCard 
              img={item.picture} 
              name={item.name} 
              id={item.id} 
              type={this.props.type} 
              storyId={this.props.storyId}/>
          </li>);
      });

      return(
        <div>
          <ul>
            {items}
          </ul>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

const mapStateToProps = (state, props) => {
  return {
    items : state.content.stories[props.storyId][props.type]
  };
};

export default connect(mapStateToProps)(DetailList);