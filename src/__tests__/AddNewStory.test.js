import React from 'react';
import {shallow, mount} from 'enzyme';

import {AddNewStory} from '../components/add-new-story';
import { createStory } from '../actions/stories';

describe('<AddNewStory />', ()=>{
  it('Renders without crashing', ()=>{
    shallow(<AddNewStory />);
  });

  it('Renders the form and input', ()=>{
    const wrapper = shallow(<AddNewStory />);
    expect(wrapper.contains(<input required={true} name="title" type="input" id="title" placeholder="new story title" aria-label="title" />))
      .toEqual(true);
  });

  it('Dispatches createStory', ()=>{
    const mockHistory = {
      push : () => {
        return;
      }
    };
    // const mockFunction = jest.fn();
    // const dispatch = val => {
    //   mockFunction(val);
    //   const data = createStory('testTitle');
    //   console.log(data);
    //   return Promise.resolve(data);
    // }
    const dispatch = jest.fn(() => {
      return Promise.resolve({data : [1,2]});
    });
    const value = 'testTitle';
    const wrapper = mount(<AddNewStory history={mockHistory} dispatch={dispatch}/>);
    wrapper.instance();
    wrapper.find('input').instance().value = value;
    wrapper.find('form').simulate('submit');
    return expect(dispatch).toHaveBeenCalled();
  });
});