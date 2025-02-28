import React, { useEffect, useState } from "react";
import axios from "axios";

function Hero() {
  const [form, setForm] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const API = "https://jsonplaceholder.typicode.com/posts";

  const datafetch = async () => {
    try {
      const response = await axios.get(API);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    datafetch();
  }, []);

  const fetchdata = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API, form);
      console.log(response.data);
    } catch (error) {
      console.log("error found", error);
    }
  };
  return (
    <div>
      <h1>Axios Practice</h1>
      <form
        style={{ border: "3px solid grey", padding: "10px" }}
        onSubmit={fetchdata}
      >
        <label>User ID</label>
        <br />
        <input
          type="text"
          placeholder="User ID"
          name="userId"
          value={form.userId}
          onChange={handleChange}
        />
        <br />

        <label>ID</label>
        <br />
        <input
          type="text"
          placeholder="ID"
          name="id"
          value={form.id}
          onChange={handleChange}
        />
        <br />

        <label>Title</label>
        <br />
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <br />

        <label>Body</label>
        <br />
        <input
          type="text"
          placeholder="Body"
          name="body"
          value={form.body}
          onChange={handleChange}
        />
        <br />
        <button type="submit"> submit</button>
      </form>
    </div>
  );
}

export default Hero;
