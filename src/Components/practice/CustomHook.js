import React from "react";
import useFormHook from "./FormHook";

function CustomHook() {
  const { form, handleChange, handleSubmit } = useFormHook({});

  //   const [form, setForm] = useState({});

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("submitted", form);
  //   };

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setForm({ ...form, [name]: value });
  //   };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Contact:</label>
        <input
          type="number"
          placeholder="number"
          name="contact"
          value={form.number}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Email:</label>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <hr />
    </div>
  );
}

export default CustomHook;
