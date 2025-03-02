import React from "react";
import "./LoginSignup.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">SignUp</div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" value="User" />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" />
        </div>
      </div>

      <div className="submit-container">
        <div className="submit">SignUp</div>
        <div className="submit">Login</div>
      </div>
    </div>
  );
};

export default LoginSignup;
