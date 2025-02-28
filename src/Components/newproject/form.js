import React, { useState } from "react";
import "./Nms.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    number: "",
  });
  const [users, setUsers] = useState([]);
  let name, value;
  const handleInput = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setFormData({ ...formData, [name]: value }); //spread operator use gareko
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.age && formData.email && formData.number) {
      setUsers([...users, formData]);
      setFormData({
        name: "",
        age: "",
        email: "",
        number: "",
      });
    }
    console.log("Form Data Submitted:", formData);
    if (formData.name && formData.email && formData.number) {
      alert("Form submitted successfully!");
    } else {
      // Show error alert if any field is empty
      alert("fill all fields before submitting!");
    }
  };

  return (
    <div className="outer-div">
      <div className="loginBox">
        <h1>Next-Step</h1>
        <h2>Student Login Page</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name here"
            value={formData.name}
            onChange={handleInput}
          />
          <br />
          <br />
          <label>Age:</label>
          <input
            type="text"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleInput}
          />
          <br />
          <br />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInput}
          />
          <br />
          <br />
          <label>Number:</label>
          <input
            type="number"
            name="number"
            placeholder="Enter your contact"
            value={formData.number}
            onChange={handleInput}
          />
          <br />
          <br />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <section className="card-section">
        <div>
          <ul>
            {users.map((user, index) => (
              <div key={index} className="cards">
                <h2>Name:{user.name}</h2>
                <h4>Name:{user.age}</h4>
                <h4>Name:{user.email}</h4>
                <h4>Name:{<user className="number"></user>}</h4>
              </div>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Form;
