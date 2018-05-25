import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCatalog } from '../../actions';
// import Home from '../../components/home';
import { getVisibleItems } from '../../reducers';
import CatalogTableContainer from '../catalogTableContainer';
import SearchContainer from '../searchContainer';
import itemPropType from '../../components/propTypes/item';


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
    items: state.catalog.items,
    // items: getVisibleItems(state.catalog.items, state.catalog.searchTerm),
    isLoading: state.catalog.isLoading
  };
};

class HomeContainer extends Component {
  // constructor(props){
  //  super(props)
  // } 
  componentDidMount() {
    /* do something */
    this.props.getCatalog();
  }
  render() {
    const { isLoading, items, searchTerm } = this.props;
    return (
      <div className="home-container">
        <SearchContainer
          searchTerm={searchTerm}
          isLoading={isLoading}
        />
        <CatalogTableContainer
          items={items}
          isLoading={isLoading}
        />
      </div>
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

HomeContainer.propTypes = {
  items: PropTypes.arrayOf(itemPropType()),
  isLoading: PropTypes.bool,
  searchTerm: PropTypes.string
};
HomeContainer.defaultProps = {
  items: [],
  isLoading: true,
  searchTerm: ''
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
