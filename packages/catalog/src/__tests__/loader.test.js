import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Loader from '../components/loader';

it('renders without crashing', () => {
  shallow(<Loader />);
});
it('should render loader div', () => {
  const wrapper = shallow(<Loader />);
  expect(wrapper.find('.loader-container')).to.have.length(1);
});