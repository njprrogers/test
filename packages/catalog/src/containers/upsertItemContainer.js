import React, { Component } from "react";
import PropTypes from "prop-types";
import UpsertItem from "../components/upsertItem";
import currenciesClient from "../client/currencies";
import itemsClient from "../client";

class UpsertItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      loading: true,
      number: null,
      currencies: [],
      edit: false
    };
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
    const { item, loading, currencies, edit, number } = this.state;
    return (
      <UpsertItem
        item={item}
        loading={loading}
        currencies={currencies}
        edit={edit}
        number={number}
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
