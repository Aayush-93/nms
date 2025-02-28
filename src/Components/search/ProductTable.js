import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export class ProductTable extends Component {
  render() {
    const { products } = this.props;
    let selectedCategory = null;

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
            {products.map((product) => {
              // Show category row only when the category changes
              const categoryRow =
                product.category !== selectedCategory ? (
                  <ProductCategoryRow
                    key={product.category}
                    category={product.category}
                  />
                ) : null;

              selectedCategory = product.category; // Update selected category

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
