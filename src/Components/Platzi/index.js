import axios from "axios";
import React, { useEffect, useState } from "react";

const Platzi = () => {
  const [product, setProduct] = useState([]);
  const [newproduct, setNewProduct] = useState({
    price: "",
    title: "",
    description: "",
    categoryId: 2,
    images: [
      "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
    ],
  });

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products?limit=9&offset=0"
      );
      console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);
  // yo chai 1st ma promise use gareko..
  // useEffect(() => {
  //   fetch("https://api.escuelajs.co/api/v1/products?limit=9&offset=0")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setProduct(data); //data store gareko in state;

  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       console.log(product);
  //     });
  // }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/products",
        newproduct
      );
      console.log("added data:", response.data);
      setProduct((prevProducts) => [response.data, ...prevProducts]);
    } catch (error) {
      console.log("erroris", error);
    }
  };

  const handlePut = async (productId) => {
    // const productId = 1;
    const response = await axios.put(
      "https://api.escuelajs.co/api/v1/products/${productId}",
      {
        id: 1,
        price: 100,
        title: "new title",
        description: "new description",
        categoryId: 2,
        images: [
          "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
        ],
      }
    );
  };
  console.log("updated data");
  const handleChange = (e) => {
    setNewProduct({
      ...newproduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const productId = 1;
    const response = await axios.delete(
      "https://api.escuelajs.co/api/v1/products/${id}"
    );
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Products Display</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="price"
          name="price"
          value={newproduct.price}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="title"
          name="title"
          value={newproduct.title}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="description"
          name="description"
          value={newproduct.description}
          onChange={handleChange}
        />
        <br />
        <input type="file" placeholder="image" />
        <button type="submit"> submit</button>
        <button onClick={handlePut}> put</button>
      </form>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        {product.length > 0 &&
          product.map((product) => (
            <div
              key={product.id}
              style={{
                border: "2px solid black",
                borderRadius: "10px",
                width: "400px",
                margin: "20px",
                padding: "20px",
              }}
            >
              <img src={product.images[0]} width="300px" />
              <h1> Price:{product.price}</h1>
              <h2>Title:{product.title}</h2>
              <p>{product.description}</p>
              <h3> Name:{product.category.name}</h3>
              <button onClick={handleDelete}> delete</button>
            </div>
          ))}
      </div>
      <button
        style={{
          color: "blue",
          borderRadius: "12px",
          width: "110px",
          height: "40px",
          backgroundColor: "grey",
          textAlign: "center",
        }}
      >
        {" "}
        hero
      </button>
    </div>
  );
};

export default Platzi;
