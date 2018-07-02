import React, { Component } from "react";
import UpsertItem from "../components/upsertItem";
import {
  itemsClient,
  currenciesClient,
  languagesClient,
  countriesClient
} from "../client";

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
      formErrorMsg: "",
      success: null
    };
    this.submitForm = this.submitForm.bind(this);
  }
  getCurrencies() {
    // Calling out to https://api.flow.io/reference/currencies
    return currenciesClient.get().then(data => {
      let currencies = [];
      data.result.forEach(element => {
        currencies.push({
          label: element.name,
          value: element.iso_4217_3
        });
      });
      return currencies;
    });
  }
  getLanguages() {
    return languagesClient.get().then(data => {
      let languages = [];
      data.result.forEach(element => {
        languages.push({
          label: element.name,
          value: element.iso_639_2
        });
      });
      return languages;
    });
  }
  getCountries() {
    return countriesClient.get().then(data => {
      let countries = [];
      data.result.forEach(element => {
        countries.push({
          label: element.name,
          value: element.iso_3166_2
        });
      });
      return countries;
    });
  }
  transformValues(submittedValues) {
    let body = {};
    let images = [];

    submittedValues.images &&
      submittedValues.images.forEach((image, index) => {
        images.push({
          url: image,
          tags: [submittedValues["images-tag"][index] || ""]
        });
      });
    const locale = submittedValues.language + "_" + submittedValues.country;
    body = {
      number: submittedValues.number,
      locale: locale,
      currency: submittedValues.currency,
      name: submittedValues.name,
      price: submittedValues.price,
      description: submittedValues.description,
      categories: submittedValues.categories.category,
      images: images
    };
    return body;
  }
  submitForm(submittedValues) {
    let opts = {};
    opts.body = this.transformValues(submittedValues);
    if (this.state.edit) {
      this.updateItem(opts);
    } else {
      this.addItem(opts);
    }
  }
  updateItem(opts) {
    itemsClient
      .putByNumber("frontend-exercises", opts.body.number, opts)
      .then(response => {
        if (!response.ok) {
          this.setState({
            formErrorMsg: response.result.messages[0],
            success: false
          });
        } else {
          this.setState({
            formErrorMsg: "",
            success: true
          });
        }
      })
      .catch(e => {
        this.setState({
          formErrorMsg: e.messages,
          success: false
        });
      });
  }
  addItem(opts) {
    itemsClient
      .post("frontend-exercises", opts)
      .then(response => {
        if (!response.ok) {
          this.setState({
            formErrorMsg: response.result.messages[0],
            success: false
          });
        } else {
          this.setState({
            formErrorMsg: "",
            success: true
          });
        }
      })
      .catch(e => {
        this.setState({
          formErrorMsg: e.messages,
          success: false
        });
      });
  }
  componentDidMount() {
    // Load currencies
    this.setState({ loading: true });
    this.getCurrencies().then(currencies => {
      this.setState({ currencies: currencies }); // would cache this in localstorage in 'real life'
    });
    this.getLanguages().then(languages => {
      this.setState({ languages: languages }); // would cache this in localstorage in 'real life'
    });
    this.getCountries().then(countries => {
      this.setState({ countries: countries }); // would cache this in localstorage in 'real life'
    });
    const number = this.props.match.params.number;
    if (!number) {
      this.setState({ loading: false, edit: false });
      return;
    } else {
      this.setState({ edit: true });
    }
    // If we are editing, load the item
    itemsClient.getByNumber("frontend-exercises", number).then(item => {
      this.setState({ item: item.result, loading: false });
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
      success
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

export default UpsertItemContainer;
