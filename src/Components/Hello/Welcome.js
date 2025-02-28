import React from "react";
import html_photo from "../Assets/htm.png";
import css_photo from "../Assets/cssimg.png";
import javascript_photo from "../Assets/jsimg.jpeg";

export default function Welcome() {
  const handleclick = () => {
    console.log("button was clicked");
  };
  return (
    <div>
      <h1
        style={{
          display: "flex",
          gap: "3rem",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        Welcome to the world of web development
      </h1>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img src={html_photo} className="card-img-top" alt="Card image" />
          <div className="card-body">
            <h5 className="card-title">Html</h5>
            <p className="card-text">
              It is the standard language used to create and structure content
              on the web.
            </p>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              className="btn btn-primary"
            >
              Click here to learn HTML
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={css_photo} className="card-img-top" alt="Card image" />
          <div className="card-body">
            <h5 className="card-title">CSS</h5>
            <p className="card-text">
              It is a stylesheet language used to control the presentation and
              layout of web pages.
            </p>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              className="btn btn-primary"
            >
              Click here to learn CsS
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={javascript_photo}
            className="card-img-top"
            alt="Card image"
          />
          <div className="card-body">
            <h5 className="card-title">javascript</h5>
            <p className="card-text">
              JavaScript is a versatile, high-level, interpreted programming
              dynamic and interactive elements on web pages.
            </p>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              className="btn btn-primary"
              onClick={handleclick}
            >
              Click here to learn JS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
