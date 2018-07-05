import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import UpsertItem from '../components/upsertItem';
import countries from '../../fixtures/countries';
import languages from '../../fixtures/languages';
import currencies from '../../fixtures/currencies';
import item from '../../fixtures/1493200';

describe('<UpsertItem />', () => {

  it('shows loading state when loading prop is set', () => {
    const submitForm = () => void 0;
    const wrapper = mount(
      <UpsertItem
        item={null}
        loading={true}
        currencies={[]}
        languages={[]}
        countries={[]}
        edit={false}
        submitForm={submitForm}
        formErrorMsg={''}
        success={true}
      />);
    expect(wrapper.find('.loader')).to.have.length(1);
  });

  it('shows form when loader is not set', () => {
    const submitForm = () => void 0;
    const wrapper = mount(
      <UpsertItem
        item={null}
        loading={false}
        currencies={[]}
        languages={[]}
        countries={[]}
        edit={false}
        submitForm={submitForm}
        formErrorMsg={''}
        success={true}
      />);
    expect(wrapper.find('form')).to.have.length(1);
  });

  it('shows the passed currencies (plus the "please select")', () => {
    const submitForm = () => void 0;
    const wrapper = mount(
      <UpsertItem
        item={null}
        loading={false}
        currencies={currencies}
        languages={[]}
        countries={[]}
        edit={false}
        submitForm={submitForm}
        formErrorMsg=''
        success={true}
      />);
    const renderedCurrencies = wrapper.find('#currencies');
    expect(renderedCurrencies.find('option')).to.have.length(currencies.length + 1);

  });

  it('shows the passed languages (plus the "please select")', () => {
    const submitForm = () => void 0;
    const wrapper = mount(
      <UpsertItem
        item={null}
        loading={false}
        currencies={[]}
        languages={languages}
        countries={[]}
        edit={false}
        submitForm={submitForm}
        formErrorMsg=''
        success={true}
      />);

    const renderedLanguages = wrapper.find('#languages');
    expect(renderedLanguages.find('option')).to.have.length(languages.length + 1);

  });

  it('shows the passed countries (plus the "please select")', () => {
    const submitForm = () => void 0;
    const wrapper = mount(
      <UpsertItem
        item={null}
        loading={false}
        currencies={[]}
        languages={[]}
        countries={countries}
        edit={false}
        submitForm={submitForm}
        formErrorMsg=""
        success={true}
      />);
    const renderedCountries = wrapper.find('#countries');
    expect(renderedCountries.find('option')).to.have.length(countries.length + 1);

  });

  it('shows Edit in h1 when we are editing', () => {
    const submitForm = () => void 0;
    const wrapper = mount(
      <UpsertItem
        item={null}
        loading={false}
        currencies={[]}
        languages={[]}
        countries={[]}
        edit={true}
        submitForm={submitForm}
        formErrorMsg=""
        success={true}
      />);
    const h1 = wrapper.find('h1').first();
    expect(h1.contains('Edit'));

  });

  it('shows Add in h1 when we are adding', () => {
    const submitForm = () => void 0;
    const wrapper = mount(
      <UpsertItem
        item={null}
        loading={false}
        currencies={[]}
        languages={[]}
        countries={[]}
        edit={false}
        submitForm={submitForm}
        formErrorMsg=""
        success={true}
      />);
    const h1 = wrapper.find('h1').first();
    expect(h1.contains('Add'));

  });

});