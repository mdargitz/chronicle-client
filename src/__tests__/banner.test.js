import React from 'react';
import {shallow} from 'enzyme';

import Banner from '../components/banner';

describe('<Banner />', () => {
  it('Renders without crashing', () => {
    shallow(<Banner />);
  });

  it('Renders the correct title given its type prop', () => {
    const types = [['characters','Characters'], 
      ['settings','Settings'], 
      ['plots', 'Plot Points'], 
      ['stories', 'Chronicle']];

    types.forEach(type => {
      const wrapper = shallow(<Banner type={type[0]} />);
      expect(wrapper.contains(<h1>{type[1]}</h1>)).toEqual(true);
    });
  });

  it('Renders the story title in an h1 if given no type prop', () => {
    const storyTitle= 'Test';
    const wrapper = shallow(<Banner storyTitle={storyTitle} />);
    expect(wrapper.contains(<h1>{storyTitle}</h1>)).toEqual(true);
  });

  it('Renders an h2 tag with story description when given the prop', () => {
    const description = 'Test';
    const wrapper = shallow(<Banner storyDescription={description} />);
    expect(wrapper.contains(<h2>Test</h2>)).toEqual(true);
  });

  it('Does not render any h2 tag if no story description prop is given', () => {
    const description = undefined;
    const wrapper = shallow(<Banner storyDescription={description} />);
    expect(wrapper.contains(<h2></h2>)).toEqual(false);
  });
});