import React from 'react';
import {shallow} from 'enzyme';

import Input from '../components/input';

const props = {
  meta : {
    active: true,
    touched: false,
    error: null,
    waring: false
  },
  element : 'input',
  input : {
    name : 'testName',

  },
  label : 'testLabel',
  placeholder : 'testPlaceholder'
};

describe('<Input />', () => {
  it('Renders without crashing', () => {
    shallow(<Input 
      meta={props.meta}
      element={props.element}
      input={props.input}
      label={props.label}
      placeholder={props.placeholder}
    />);
  });

  it('Renders an input field and label', () => {
    const wrapper = shallow(<Input 
      meta={props.meta}
      element={props.element}
      input={props.input}
      label={props.label}
      placeholder={props.placeholder}
    />);
    expect(wrapper.contains(<label htmlFor='testName'>testLabel</label>)).toEqual(true);
    expect(wrapper.contains(<input name="testName" id="testName" placeholder="testPlaceholder" rows="4" cols="40" />)).toEqual(true);
  });

  it('Renders an error when error prop not null', () => {
    const newMeta = {...props.meta, error: 'a test error', touched: true};
    const wrapper = shallow(<Input 
      meta={newMeta}
      element={props.element}
      input={props.input}
      label={props.label}
      placeholder={props.placeholder}
    />);
    expect(wrapper.contains(<div className="error">a test error</div>)).toEqual(true);
  });

  it('Renders a warning when warning prop not null', () => {
    const newMeta = {...props.meta, warning: 'a test warning', touched: true};
    const wrapper = shallow(<Input 
      meta={newMeta}
      element={props.element}
      input={props.input}
      label={props.label}
      placeholder={props.placeholder}
    />);
    expect(wrapper.contains(<div>a test warning</div>)).toEqual(true);
  });
});