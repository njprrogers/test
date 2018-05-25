import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateSearchTerm } from '../actions';
import { getVisibleItems } from '../reducers';
import Search from '../components/search';

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
    searchTerm: state.catalog.searchTerm, 
    isLoading: state.catalog.isLoading
  };
};

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    /* do something */
    // this.props.getCatalog();
  }

  handleChange(searchTerm) {
    this.props.updateSearchTerm(searchTerm);
    // dispatch(updateSearchTerm(value));
    // pass change state function from container to here
  }

  render() {
    const { isLoading, searchTerm } = this.props;
    return (
      <Search
        searchTerm={searchTerm}
        isLoading={isLoading}
        handleChange={this.handleChange}
      />
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateSearchTerm,
      changePage: () => push('/about-us')
    },
    dispatch
  );

SearchContainer.propTypes = {
  searchTerm: PropTypes.string,
  isLoading: PropTypes.bool,
  updateSearchTerm: PropTypes.func
};
SearchContainer.defaultProps = {
  searchTerm: '',
  isLoading: true,
  updateSearchTerm: () => {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
