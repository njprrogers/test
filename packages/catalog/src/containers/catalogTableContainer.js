
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCatalog } from '../actions';
import CatalogTable from '../components/catalogTable';
import { getVisibleItems } from '../reducers';
import itemPropType from '../components/propTypes/item';

// const mapStateToProps = state => ({
//   count: state.counter.count,
//   isIncrementing: state.counter.isIncrementing,
//   isDecrementing: state.counter.isDecrementing,
//   catalogItems: state.catalogItems,
//   isLoading: state.isLoading
// });
const mapStateToProps = function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    // items: state.catalog.items,
    items: getVisibleItems(state.catalog, state.catalog.searchTerm), 
    isLoading: state.catalog.isLoading
  };
};

class CatalogTableContainer extends Component {
  // constructor(props){
  //  super(props)
  // } 
  componentDidMount() {
    /* do something */
    this.props.getCatalog();
  }
  render() {
    const { isLoading, items } = this.props;
    return (
      <CatalogTable
        items={items}
        isLoading={isLoading}
      />
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCatalog,
      changePage: () => push('/about-us')
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

export default connect(mapStateToProps, mapDispatchToProps)(CatalogTableContainer);