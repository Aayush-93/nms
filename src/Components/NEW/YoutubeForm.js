import React from "react";
import { useFormik } from "formik";
function YoutubeForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log("form data", values);
    },
    validate: (values) => {
      //conditions
      // values.name values.email values.channel
      //errors.name errors.email errors.channel
      //errors.name="required"
      let errors = {};
      if (!values.name) {
        errors.name = "required";
      }
      if (!values.email) {
        errors.email = "required";
      }

      if (!values.channel) {
        errors.channel = "required";
      }

      return errors;
    },
  });
  console.log("form values", formik.values);
  console.log("form errors", formik.errors);
  return (
    <div>
      <div
        style={{
          border: "1px solid black ",
          background: "grey",
          width: "400px",
          height: "350px",
          padding: "30px 30px",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <h2>Youtube Form</h2>
          <label htmlFor="name"> Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          ) : null}
          <br />

          <label htmlFor="email"> E-mail</label>
          <br />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}

          <br />

          <label htmlFor="channel"> channel</label>
          <br />

          <input
            type="text"
            id="channel"
            name="channel"
            placeholder="ChannelName"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
          {formik.errors.channel ? (
            <div style={{ color: "red" }}>{formik.errors.channel}</div>
          ) : null}

          <br />
          <br />
          <button type="submit"> Submit</button>
        </form>
      </div>
    </div>
  );
}

export default YoutubeForm;
