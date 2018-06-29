import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/home.css';

// const Search = (props) => {
class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleChange(event.target.value);
    // pass change state function from container to here
  }

  handleSelect(event) {
    this.props.handleSelectChange(event.target.value);
    // pass change state function from container to here
  }

  render() {
    return (
      <div id="search" className="search-form">
        <select className="search-select" onChange={this.handleSelectChange}>
          <option value="all">All</option>
          <option value="category">Category</option>
          <option value="brand">Brand</option>
        </select>
          
        <input
          type="text"
          className="search-input"
          length="20"
          placeholder="Search"
          value={this.props.searchTerm}
          // defaultValue={this.props.searchTerm}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
Search.propTypes = {
  searchTerm: PropTypes.string,
  isLoading: PropTypes.bool
};
Search.defaultProps = {
  searchTerm: '',
  isLoading: true
};
export default Search;
