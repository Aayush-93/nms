import React from "react";
import { Link, useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1> home component</h1>

      {/* <button onClick={handleClick}> goto about</button> */}
      <div className="hero-container">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Discover amazing content and get started today.</p>
          <button onClick={handleClick} className="hero-button">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
