import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';
import Search from '../components/search';

describe('<Search />', () => {

  it('renders without crashing', () => {
    shallow(<Search />);
  });

  it('should render three <Search /> components', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('.search-form')).to.have.length(1);
  });

  it('should render a Select dropdown', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('.search-select')).to.have.length(1);
  });

  it('Select should have three options', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('option')).to.have.length(3);
  });

  it('Select change should trigger handleSelectChange', () => {
    const handleSelectChange = sinon.spy();
    const wrapper = shallow(<Search handleSelectChange={handleSelectChange} />);
    wrapper.find('select').simulate('change');
    expect(handleSelectChange.calledOnce).to.equal(true);
  });

  it('Select change should trigger handleSelectChange', () => {
    const handleSelectChange = sinon.spy();
    const wrapper = shallow(<Search handleSelectChange={handleSelectChange} />);
    wrapper.find('select').simulate('change');
    expect(handleSelectChange.calledOnce).to.equal(true);
  })

  it('Changing Search input value should trigger handleChange', () => {
    const handleChange = sinon.spy();
    const searchTerm = 'Shoes';
    const wrapper = mount(<Search handleChange={handleChange} searchTerm={searchTerm} />);

    wrapper.find('.search-input').simulate('change', { target: { value: 'Shoes' } });
    expect(wrapper.find('.search-input')).to.have.value('Shoes');

    expect(handleChange.calledOnce).to.equal(true);
  });
});
