import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users"; // Fake API

const AxiosPutExample = ({ userId }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [message, setMessage] = useState(""); // For success or error messages

  // Fetch existing user data before updating it
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${API_URL}/${userId}`);
        setForm({
          name: response.data.name,
          email: response.data.email,
        }); // Populate form fields with the existing data
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userId) {
      fetchUserData(); // Fetch user data if userId is provided
    }
  }, [userId]); // Re-run if `userId` changes

  // Handle form input changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value, // Dynamically update form fields
    });
  };

  // Handle form submission (Updating user data)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use PUT to update the user with the form data
      const response = await axios.put(`${API_URL}/${userId}`, form);
      console.log("User Updated:", response.data);
      setMessage("User updated successfully! ✅");
    } catch (error) {
      console.log("Error updating user:", error);
      setMessage("Error updating user ❌");
    }
  };

  return (
    <div>
      <h1>Update User</h1>
      <form
        onSubmit={handleSubmit}
        style={{ border: "2px solid black", width: "250px", padding: "10px" }}
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Update</button>
      </form>
      {message && <p>{message}</p>} {/* Display success or error messages */}
    </div>
  );
};

export default AxiosPutExample;
