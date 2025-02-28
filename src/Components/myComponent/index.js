import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest, deleteDataRequest } from "../../Redux/actions";
import "./ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.posts);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteDataRequest(id));
  };
  const handleBuyNow = (product) => {
    console.log("buyed");
    setSelected((preV) => [...preV, product]);
  };

  return (
    <div className="product-list-container">
      <h1 className="title">Products List</h1>

      {error && <p className="error-message">Error: {error}</p>}

      <div className="products-grid">
        {data?.length > 0 ? (
          data.slice(0, 15).map((product) => (
            <div key={product.id} className="product-card">
              {/* You can add a fallback image here if you need */}
              <img
                // src={product.images[0]} // Uncomment if product images are available
                alt={product.title}
                className="product-image"
              />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">${product.price}</p>
              <button
                className="buy-button"
                onClick={() => handleBuyNow(product)}
              >
                Buy Now
              </button>
              <button
                className="buy-button"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="loading-text">Loading products...</p>
        )}
      </div>
      {/* display card */}
      <div>
        <h2> Your purchased item</h2>
        <ul>
          {selected.map((product, index) => (
            <p>
              {" "}
              {product.title}-{product.price}
            </p>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
