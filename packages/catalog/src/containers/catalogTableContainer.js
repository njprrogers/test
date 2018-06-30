import React, { Component } from "react";
import PropTypes from "prop-types";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getCatalog, deleteCatalogItem, editCatalogItem } from "../actions";
import CatalogTable from "../components/catalogTable";
import itemPropType from "../components/propTypes/item";

const mapStateToProps = function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    items: state.catalog.items,
    isLoading: state.catalog.isLoading
  };
};

class CatalogTableContainer extends Component {
  componentDidMount() {
    this.props.getCatalog();
  }
  render() {
    const {
      isLoading,
      items,
      deleteCatalogItem,
      editCatalogItem,
      editPage
    } = this.props;
    return (
      <CatalogTable
        items={items}
        isLoading={isLoading}
        deleteCatalogItem={deleteCatalogItem}
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
        console.log(e);
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
