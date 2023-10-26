import React, { useState } from "react";
import "./login.css";
import { axiosInstance } from "../../utils/config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };


  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post(
        "/auth/login",
        credentials
      );
      localStorage.setItem('user', res.data.fullName);
      localStorage.setItem('userId', res.data._id);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <h1 className="loginTitle">Login</h1>
        <div className="loginInputbox">
          <label className="loginLabel">Email/Mobile</label>
          <input
            className="loginInput"
            type="text"
            id="email"
            name="email"
            placeholder="John@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="loginInputbox">
          <label className="loginLabel" >
            Password
          </label >
          <input className="loginInput" type="password" placeholder="123123" id="password"
          onChange={handleChange} />
        </div>
        <button className="loginButton" onClick={handleClick}>Login</button>
        <span className="loginSpan" onClick={()=>navigate("/register")}>Not a member? SignUp</span>
      </div>
    </div>
  );
};

export default Login;

