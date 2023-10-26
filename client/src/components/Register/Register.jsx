import { useState } from "react";
import "./register.css";
import { axiosInstance } from "../../utils/config";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [credentials, setCredentials] = useState({
    fullName: undefined,
    fatherName: undefined,
    email: undefined,
    number: undefined,
    password: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  console.log(credentials, "checkk at register");

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/register", credentials);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <h1 className="registerTitle">Sign Up</h1>
        <div className="registerInputbox">
          <label className="registerLabel">Full Name</label>
          <input
            className="registerInput"
            type="text"
            id="fullName"
            name="fullName"
            placeholder="John"
            onChange={handleChange}
          />
        </div>
        <div className="registerInputbox">
          <label className="registerLabel">Father Name</label>
          <input
            className="registerInput"
            type="text"
            id="fatherName"
            name="fatherName"
            placeholder="Doe"
            onChange={handleChange}
          />
        </div>
        <div className="registerInputbox">
          <label className="registerLabel">Email</label>
          <input
            className="registerInput"
            type="text"
            id="email"
            name="email"
            placeholder="John@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="registerInputbox">
          <label className="registerLabel">Phone Number</label>
          <input
            className="registerInput"
            type="text"
            id="number"
            name="number"
            placeholder="123456789"
            onChange={handleChange}
          />
        </div>
        <div className="registerInputbox">
          <label className="registerLabel">password</label>
          <input className="registerInput"             type="text"
            id="password"
            name="password"
            placeholder="123456789"
            onChange={handleChange}/>
        </div>
        <button className="registerButton" onClick={handleClick}>Sign Up</button>
        <span className="registerSpan">Already a member? Login</span>
      </div>
    </div>
  );
};

export default Register;
