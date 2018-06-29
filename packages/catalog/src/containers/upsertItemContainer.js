import React, { Component } from "react";
import PropTypes from "prop-types";
import UpsertItem from "../components/upsertItem";
import currenciesClient from "../client/currencies";
import { itemsClient } from "../client";

class UpsertItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      loading: true,
      number: null,
      currencies: [],
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
      console.log(data);
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
    body = {
      number: submittedValues.number,
      locale: submittedValues.locale,
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
    // this.setState({ submittedValues });
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
            formError: true,
            formErrorMsg: response.result.messages[0],
            success: false
          });
        } else {
          this.setState({
            formError: false,
            formErrorMsg: "",
            success: true
          });
        }
      })
      .catch(e => {
        this.setState({
          formError: true,
          formErrorMsg: e.messages
        });
      });
    console.log("update submit form", opts);
  }
  addItem(opts) {
    itemsClient
      .post("frontend-exercises", opts)
      .then(response => {
        if (!response.ok) {
          this.setState({
            formError: true,
            formErrorMsg: response.result.messages[0],
            success: false
          });
        } else {
          this.setState({
            formError: false,
            formErrorMsg: "",
            success: true
          });
        }
      })
      .catch(e => {
        this.setState({
          formError: true,
          formErrorMsg: e.messages
        });
      });
    console.log("submit form", opts);
  }
  componentDidMount() {
    // Load currencies
    this.setState({ loading: true });
    this.getCurrencies().then(currencies => {
      this.setState({ currencies: currencies }); // would cache this in localstorage in 'real life'
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

// UpsertItemContainer.propTypes = {
//   items: PropTypes.arrayOf(itemPropType()),
//   isLoading: PropTypes.bool
// };
// UpsertItemContainer.defaultProps = {
//   items: [],
//   isLoading: true
// };

export default UpsertItemContainer;
