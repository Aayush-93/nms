import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [form, setForm] = useState({
    title: "",
    price: 0,
    description: "",
    images: "",
    categoryId: 1,
  });

  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: form.title,
      price: parseInt(form.price),
      description: form.description,
      categoryId: parseInt(form.categoryId),
      images: [
        "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
      ],
    };
    try {
      console.log(data);
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/products",
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchCategory() {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/categories"
        );
        setCategories(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCategory();
  }, []);
  console.log(categories);

  return (
    <div>
      <div style={{ border: "2px solid black" }}>
        <h1> Form Submit </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            placeholder="price"
            name="price"
            value={form.price}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="description"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
          <br />
          <input type="file" placeholder="image" />
          <br />
          <select
            name="categoryId"
            value={form.categoryId}
            onChange={handleChange}
          >
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <button type="submit"> Submit </button>
        </form>
      </div>
    </div>
  );
};

export default Axios;
