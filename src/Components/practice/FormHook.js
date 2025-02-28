// import { useState } from "react";

// function useFormHook() {
//   const [form, setForm] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("form is submitted", form);
//   };

//   return { form, handleChange, handleSubmit };
// }

// export default useFormHook;

import React, { useState } from "react";
function useFormHook(intialValue) {
  const [form, setForm] = useState({ intialValue });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return { handleChange, handleSubmit, form };
}
export default useFormHook;
