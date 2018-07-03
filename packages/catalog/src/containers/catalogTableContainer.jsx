import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCatalog, deleteCatalogItem, editCatalogItem } from '../actions';
import CatalogTable from '../components/catalogTable';
import itemPropType from '../components/propTypes/item';

const mapStateToProps = function mapStateToProps(state) {
  return {
    items: state.catalog.items,
    isLoading: state.catalog.isLoading,
  };
};

class CatalogTableContainer extends Component {
  constructor(props) {
    super(props);
    this.deleteCatalogItem = this.deleteCatalogItem.bind(this);
  }

  componentDidMount() {
    const { getCatalog } = this.props;
    getCatalog();
  }

  deleteCatalogItem(e) {
    const { number } = e.target.dataset;
    const { deleteCatalogItem } = this.props;
    deleteCatalogItem(number);
  }

  render() {
    const {
      isLoading, items, editCatalogItem, editPage,
    } = this.props;
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
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getCatalog,
    deleteCatalogItem,
    editCatalogItem,
    changePage: () => push('/about-us'),
    editPage: () => {
      push('/upsert-item');
    },
  },
  dispatch,
);

CatalogTableContainer.propTypes = {
  items: PropTypes.arrayOf(itemPropType()),
  isLoading: PropTypes.bool,
  getCatalog: PropTypes.func,
  deleteCatalogItem: PropTypes.func,
  editCatalogItem: PropTypes.func,
  editPage: PropTypes.func,
};
CatalogTableContainer.defaultProps = {
  items: [],
  isLoading: true,
  getCatalog: () => void 0,
  deleteCatalogItem: () => void 0,
  editCatalogItem: () => void 0,
  editPage: () => void 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CatalogTableContainer,
);
