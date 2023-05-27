import "./Login.css";
import Logo from "../../Images/logo.png";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../../Redux/actions/AuthAction";
export default function Login() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  // console.log(formData)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // function handleChange(event) {
  //   const { name, value, type, checked } = event.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(logIn(formData));
  }

  return (
    <div className="form--container">
      <h3>
        Find your loyal companion and give them a forever home <br />
      </h3>
      <form className="form" onSubmit={handleSubmit}>
        <img src={Logo} alt="background" height={200} />
        <input
          type="email"
          placeholder="Email"
          className="form-input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <div className="row" style={{ marginBottom: "5px" }}>
          <span
            style={{
              fontSize: "14 px",
              cursor: "pointer",
              textDecoration: "underline",
              marginRight: "5px",
            }}
          >
            Don't have an account?
          </span>
          <Link to={"/Signup"} style={{ textDecoration: "none" }}>
            Sign Up
          </Link>
        </div>
        <button className="form--submit"> Login </button>
      </form>
    </div>
  );
}
