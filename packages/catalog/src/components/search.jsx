import React from 'react';
import PropTypes from 'prop-types';
import '../css/home.css';

// const Search = (props) => {
class Search extends React.Component {
  // const loadingMsg = props.isLoading ? 'is loading' : 'not loading';
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.searchTerm !== this.props.searchTerm) {
  //     this.setInputValue(nextProps.searchTerm);
  //   }
  // }

  handleChange(event) {
    this.props.handleChange(event.target.value);
    // pass change state function from container to here
  }

  render() {
    return (
      <form id="search">
        <input
          type="text"
          className="search-input"
          length="20"
          placeholder="Search"
          value={this.props.searchTerm}
          // defaultValue={this.props.searchTerm}
          onChange={this.handleChange}
        />
      </form>
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
