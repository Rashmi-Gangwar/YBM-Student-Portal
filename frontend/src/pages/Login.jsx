import React from "react";
import "./Login.css";
import LoginImg from "../assets/login-img.png";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-container">

        <div className="login-left">
          <p>YBM University</p>
          <h1>Welcome to <br /> <span>student portal</span></h1>
          <p>Login to access your account</p>
          <img src={ LoginImg } alt="Illustration" />
        </div>

        <div className="login-right">
          <h2>Login</h2>
          <p>Enter your account details</p>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <div className="login-options">
            <a href="#">Forgot Password?</a>
          </div>
          <button className="login-btn">Login</button>
        </div>

      </div>
    </div>
  );
};

export default Login;
