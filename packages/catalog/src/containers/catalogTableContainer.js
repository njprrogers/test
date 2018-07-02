import React, { Component } from "react";
import PropTypes from "prop-types";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getCatalog, deleteCatalogItem, editCatalogItem } from "../actions";
import CatalogTable from "../components/catalogTable";
import itemPropType from "../components/propTypes/item";

const mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    items: state.catalog.items,
    isLoading: state.catalog.isLoading
  };
};

class CatalogTableContainer extends Component {
  constructor(props) {
    super(props);
    this.deleteCatalogItem = this.deleteCatalogItem.bind(this);
  }
  componentDidMount() {
    this.props.getCatalog();
  }
  deleteCatalogItem(e) {
    const number = e.target.dataset.number;
    this.props.deleteCatalogItem(number);
  }
  render() {
    const { isLoading, items, editCatalogItem, editPage } = this.props;
    return (
      <CatalogTable
        items={items}
        isLoading={isLoading}
        deleteCatalogItem={this.deleteCatalogItem}
        editCatalogItem={editCatalogItem}
        editPage={editPage}
      />
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCatalog,
      deleteCatalogItem,
      editCatalogItem,
      changePage: () => push("/about-us"),
      editPage: e => {
        push("/upsert-item");
      }
    },
    dispatch
  );

CatalogTableContainer.propTypes = {
  items: PropTypes.arrayOf(itemPropType()),
  isLoading: PropTypes.bool
};
CatalogTableContainer.defaultProps = {
  items: [],
  isLoading: true
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CatalogTableContainer
);
