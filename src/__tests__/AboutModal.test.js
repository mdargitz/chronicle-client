import React from 'react';
import {shallow, mount} from 'enzyme';

import {AboutModal} from '../components/about-modal';
import ReactModal from 'react-modal';
import {closeAbout} from '../actions/modal';

describe('<AboutModal />', ()=>{
  it('Renders without crashing', ()=>{
    shallow(<AboutModal />);
  });

  it('Renders the React Modal', ()=>{
    const wrapper = shallow(<AboutModal />);
    expect(wrapper.contains(<h1>Planner, Manager, Builder</h1>))
      .toEqual(true);
  });

  it('Dispatches closeAbout from ReactModal', ()=>{
    const dispatch = jest.fn();
    const wrapper = mount(<AboutModal isOpen={true} dispatch={dispatch}/>);
    const button = wrapper.find('button');
    button.instance();
    button.simulate('click');
    expect(dispatch).toHaveBeenCalledWith(closeAbout());
  });
});