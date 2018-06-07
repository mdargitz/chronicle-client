import React from 'react';
import {shallow, mount} from 'enzyme';

import Banner from '../components/banner';

describe('<Banner />', () => {
  it('Renders without crashing', () => {
    shallow(<Banner />);
  });
});