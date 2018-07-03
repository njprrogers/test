import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  updateSearchTerm,
  updateSearchType,
  searchCatalogItems,
  getCatalog,
} from '../actions';
import Search from '../components/search';

const mapStateToProps = function mapStateToProps(state) {
  return {
    searchTerm: state.catalog.searchTerm,
    searchType: state.catalog.searchType,
    isLoading: state.catalog.isLoading,
  };
};

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleChange(event) {
    const searchTerm = event.target.value;
    const { updateSearchTerm, getCatalog, searchCatalogItems } = this.props;
    if (searchTerm === '') {
      updateSearchTerm(searchTerm);
      getCatalog();
    } else {
      searchCatalogItems(searchTerm);
    }
  }

  handleSelectChange(event) {
    const searchType = event.target.value;
    const { updateSearchType } = this.props;
    updateSearchType(searchType);
  }

  render() {
    const { isLoading, searchTerm } = this.props;
    return (
      <Search
        searchTerm={searchTerm}
        isLoading={isLoading}
        handleChange={this.handleChange}
        handleSelectChange={this.handleSelectChange}
      />
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    updateSearchTerm,
    updateSearchType,
    searchCatalogItems,
    getCatalog,
    changePage: () => push('/about-us'),
  },
  dispatch,
);

SearchContainer.propTypes = {
  searchTerm: PropTypes.string,
  isLoading: PropTypes.bool,
  updateSearchTerm: PropTypes.func,
  updateSearchType: PropTypes.func,
  getCatalog: PropTypes.func,
  searchCatalogItems: PropTypes.func,
};
SearchContainer.defaultProps = {
  searchTerm: '',
  isLoading: true,
  updateSearchTerm: () => {},
  updateSearchType: () => void 0,
  getCatalog: () => void 0,
  searchCatalogItems: () => void 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
