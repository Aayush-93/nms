import React from "react";

function FormSubmit() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" name="title" />
        <br />
        <input type="number" placeholder="price" name="price" />
        <br />
        <input type="text " placeholder="description" name="description" />
        <br />
        <input type="number" placeholder="categoryid" name="categoryid" />
        <br />
        <input type="file" placeholder="image" />
        <button type="submit"> submit</button>
      </form>
    </div>
  );
}

export default FormSubmit;
