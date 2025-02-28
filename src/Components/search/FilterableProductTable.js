import React, { Component } from "react";
import SearchBar from "./SearchBar ";
import ProductTable from "./ProductTable";
import data from "./dummy";
import { Outlet } from "react-router";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      inStockOnly: false,
    };
    this.dataHandler = this.dataHandler.bind(this);
  }

  dataHandler(input) {
    this.setState({
      searchText: input,
    });
  }

  render() {
    const { searchText } = this.state;

    const filteredProducts = data.filter((product) => {
      return (
        product.category.toLowerCase().includes(searchText.toLowerCase()) ||
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
    });

    return (
      <>
        <div className="outerTable">
          <SearchBar data={this.state} onSearchChange={this.dataHandler} />
          <ProductTable products={filteredProducts} />
          <Outlet />
        </div>
      </>
    );
  }
}

export default FilterableProductTable;
