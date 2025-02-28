// FilterableProductTable.js
import React, { Component } from "react";
import SearchBar from "./SearchBar"; // blue
import ProductTable from "./ProductTable"; // green
import data from "./dummy";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      inStockOnly: false,
    };

    // Binding methods
    this.dataHandler = this.dataHandler.bind(this);
    this.stockHandler = this.stockHandler.bind(this);
  }

  // Handles changes in search input
  dataHandler(input) {
    this.setState({
      searchText: input,
    });
  }

  // Handles changes in the checkbox
  stockHandler(isChecked) {
    this.setState({
      inStockOnly: isChecked,
    });
  }

  render() {
    const { searchText, inStockOnly } = this.state;

    // Filter products based on search text
    const filteredProducts = data.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()) ||
      product.category.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
      <div className="outerTable">
        {/* Pass props down to SearchBar and ProductTable */}
        <SearchBar 
          data={this.state} 
          onSearchChange={this.dataHandler} 
          onStockChange={this.stockHandler}
        />
        <ProductTable 
          products={filteredProducts} 
          inStockOnly={inStockOnly} 
        />
      </div>
    );
  }
}

export default FilterableProductTable;


// SearchBar.js
import React, { Component } from "react";

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleStockChange = this.handleStockChange.bind(this);
  }

  // Handles the search text input change
  handleSearchChange(e) {
    this.props.onSearchChange(e.target.value);
  }

  // Handles the checkbox for in-stock filter
  handleStockChange(e) {
    this.props.onStockChange(e.target.checked);
  }

  render() {
    const { searchText, inStockOnly } = this.props.data;

    return (
      <div>
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={this.handleSearchChange}
        />
        <br />
        {/* In-stock only checkbox */}
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={this.handleStockChange}
          />
          Only show products in stock
        </label>
      </div>
    );
  }
}

export default SearchBar;


// ProductTable.js
import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow"; // turquoise
import ProductRow from "./ProductRow"; // red

export class ProductTable extends Component {
  render() {
    const { products, inStockOnly } = this.props;
    let selectedCategory = null;

    // Filter products based on "inStockOnly"
    const filteredProducts = inStockOnly
      ? products.filter((product) => product.stocked)
      : products;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => {
              const categoryRow =
                product.category !== selectedCategory ? (
                  <ProductCategoryRow
                    key={product.category}
                    category={product.category}
                  />
                ) : null;

              selectedCategory = product.category;

              return (
                <React.Fragment key={product.id}>
                  {categoryRow}
                  <ProductRow product={product} />
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;

// ProductCategoryRow.js
import React from "react";

export class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th> {/* Displays category header */}
      </tr>
    );
  }
}

export default ProductCategoryRow;

// ProductRow.js
import React from "react";

export class ProductRow extends React.Component {
  render() {
    const { product } = this.props;

    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;

// dummy.js
const data = [
    { id: 1, category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { id: 2, category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { id: 3, category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { id: 4, category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { id: 5, category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { id: 6, category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
  ];
  
  export default data;
  