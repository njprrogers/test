import React from 'react';
import PropTypes from 'prop-types';
import '../css/home.css';

const Search = ({ handleChange, handleSelectChange, searchTerm }) => (
  <div id="search" className="search-form">
    <select className="search-select" onChange={handleSelectChange}>
      <option value="all">
        All
      </option>
      <option value="category">
        Category
      </option>
      <option value="brand">
        Brand
      </option>
    </select>

    <input
      type="text"
      className="search-input"
      length="20"
      placeholder="Search"
      value={searchTerm}
      onChange={handleChange}
    />
  </div>
);

Search.propTypes = {
  searchTerm: PropTypes.string,
  handleChange: PropTypes.func,
  handleSelectChange: PropTypes.func,
};
Search.defaultProps = {
  searchTerm: '',
  handleChange: () => void 0,
  handleSelectChange: () => void 0,
};
export default Search;
