import React from "react";
import useFormHook from "./FormHook";

function Formm() {
  const { form, handleSubmit, handleChange } = useFormHook({});
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
          name="number"
          value={form.number}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Formm;
