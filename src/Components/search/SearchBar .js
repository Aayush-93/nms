import React, { Component } from "react";

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onSearchChange(e.target.value);
  }

  render() {
    const { searchText, isStockOnly } = this.props.data;
    return (
      <div>
        {/* search input field */}
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="check">
          <input type="checkbox" id="check" />
          only show products in stock
        </label>
      </div>
    );
  }
}

export default SearchBar;
