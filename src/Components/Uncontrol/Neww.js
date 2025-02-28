import React, { useRef } from "react";

function Neww() {
  const dataRef = useRef();

  const handleChange = () => {
    const filesize = dataRef.current.files[0];

    if (filesize > 500000) {
      alert("your file size is more than 500kb");
      dataRef.current.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataRef.current.files);
    const filesize = dataRef.current.files[0];

    if (!filesize) {
      alert("no file selected");
      return;
    }
    alert("your file is sucessfully received");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" ref={dataRef} onChange={handleChange} />
        <p></p>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Neww;
