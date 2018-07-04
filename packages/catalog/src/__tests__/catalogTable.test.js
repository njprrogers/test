import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';
import item from '../../fixtures/1493200';
import CatalogTable from '../components/catalogTable';

describe('<CatalogTable />', () => {
  it('renders without crashing', () => {
    shallow(<CatalogTable />);
  });
  
  it('shows loading state when prop is set', () => {
    const deleteCatalogItem = () => void 0;
    const wrapper = mount(<CatalogTable items={[item]} isLoading={true} deleteCatalogItem={deleteCatalogItem} />);
    expect(wrapper.find('.loader')).to.have.length(1);
  });
  
  it('shows no results when there are no items', () => {
    const deleteCatalogItem = () => void 0;
    const wrapper = mount(<CatalogTable items={[]} isLoading={false} deleteCatalogItem={deleteCatalogItem} />);
    expect(wrapper.find('.no-results')).to.have.length(1);
  });

  it('shows a table', () => {
    const wrapper = shallow(<CatalogTable items={[item]} isLoading={false} />);
    expect(wrapper.find('table')).to.have.length(1);
  });

  it('shows two table rows for item 1493200', () => {
    const wrapper = shallow(<CatalogTable items={[item]} isLoading={false} />);
    expect(wrapper.find('tr')).to.have.length(2);
  });

  it('shows four categories for item 1493200', () => {
    const wrapper = shallow(<CatalogTable items={[item]} isLoading={false} />);
    expect(wrapper.find('.category-item')).to.have.length(4);
  });

  it('shows City category first for item 1493200', () => {
    const wrapper = shallow(<CatalogTable items={[item]} isLoading={false} />);
    expect(wrapper.find('.category-item').first().html()).to.equal('<span class="category-item">City</span>');
  });

  it('shows correct number on delete link', () => {
    const wrapper = shallow(<CatalogTable items={[item]} isLoading={false} />);
    expect(wrapper.find('.delete').html()).to.contain('data-number="1493200"');
  });

});
