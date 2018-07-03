import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UpsertItem from '../components/upsertItem';
import {
  itemsClient,
  currenciesClient,
  languagesClient,
  countriesClient,
} from '../client';

class UpsertItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      loading: true,
      number: null,
      currencies: [],
      languages: [],
      countries: [],
      edit: false,
      formError: false,
      formErrorMsg: '',
      success: null,
    };
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    // Load currencies
    this.setState({ loading: true });
    this.getCurrencies().then((currencies) => {
      this.setState({ currencies }); // would cache this in localstorage in 'real life'
    });
    this.getLanguages().then((languages) => {
      this.setState({ languages }); // would cache this in localstorage in 'real life'
    });
    this.getCountries().then((countries) => {
      this.setState({ countries }); // would cache this in localstorage in 'real life'
    });
    const { number } = this.props.match.params;
    if (!number) {
      this.setState({ loading: false, edit: false });
      return;
    }
    this.setState({ edit: true });

    // If we are editing, load the item
    itemsClient.getByNumber('frontend-exercises', number).then((item) => {
      this.setState({ item: item.result, loading: false });
    });
  }
  /* eslint-disable class-methods-use-this */

  getCurrencies() {
    // Calling out to https://api.flow.io/reference/currencies
    return currenciesClient.get().then((data) => {
      const currencies = [];
      data.result.forEach((element) => {
        currencies.push({
          label: element.name,
          value: element.iso_4217_3,
        });
      });
      return currencies;
    });
  }

  getLanguages() {
    return languagesClient.get().then((data) => {
      const languages = [];
      data.result.forEach((element) => {
        languages.push({
          label: element.name,
          value: element.iso_639_2,
        });
      });
      return languages;
    });
  }

  getCountries() {
    return countriesClient.get().then((data) => {
      const countries = [];
      data.result.forEach((element) => {
        countries.push({
          label: element.name,
          value: element.iso_3166_2,
        });
      });
      return countries;
    });
  }

  transformValues(submittedValues) {
    let body = {};
    const images = [];

    if (submittedValues.images) {
      submittedValues.images.forEach((image, index) => {
        images.push({
          url: image,
          tags: [submittedValues['images-tag'][index] || ''],
        });
      });
    }

    const locale = `${submittedValues.language}_${submittedValues.country}`;
    body = {
      number: submittedValues.number,
      locale,
      currency: submittedValues.currency,
      name: submittedValues.name,
      price: submittedValues.price,
      description: submittedValues.description,
      categories: submittedValues.categories.category,
      images,
    };
    return body;
  }

  submitForm(submittedValues) {
    const opts = {};
    const { edit } = this.state;
    opts.body = this.transformValues(submittedValues);
    if (edit) {
      this.updateItem(opts);
    } else {
      this.addItem(opts);
    }
  }

  updateItem(opts) {
    itemsClient
      .putByNumber('frontend-exercises', opts.body.number, opts)
      .then((response) => {
        if (!response.ok) {
          this.setState({
            formErrorMsg: response.result.messages[0],
            success: false,
          });
        } else {
          this.setState({
            formErrorMsg: '',
            success: true,
          });
        }
      })
      .catch((e) => {
        this.setState({
          formErrorMsg: e.messages,
          success: false,
        });
      });
  }

  addItem(opts) {
    itemsClient
      .post('frontend-exercises', opts)
      .then((response) => {
        if (!response.ok) {
          this.setState({
            formErrorMsg: response.result.messages[0],
            success: false,
          });
        } else {
          this.setState({
            formErrorMsg: '',
            success: true,
          });
        }
      })
      .catch((e) => {
        this.setState({
          formErrorMsg: e.messages,
          success: false,
        });
      });
  }

  render() {
    const {
      item,
      loading,
      currencies,
      languages,
      countries,
      edit,
      number,
      formError,
      formErrorMsg,
      success,
    } = this.state;
    return (
      <UpsertItem
        item={item}
        loading={loading}
        currencies={currencies}
        languages={languages}
        countries={countries}
        edit={edit}
        number={number}
        submitForm={this.submitForm}
        formError={formError}
        formErrorMsg={formErrorMsg}
        success={success}
      />
    );
  }
}
UpsertItemContainer.propTypes = {
  match: PropTypes.shape({
    params: {
      number: PropTypes.string,
    },
  }),

};
UpsertItemContainer.defaultProps = {
  match: {},
};
export default UpsertItemContainer;
/* eslint-disable class-methods-use-this */
