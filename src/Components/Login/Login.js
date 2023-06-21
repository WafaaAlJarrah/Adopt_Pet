import "./Login.css";
import Logo from "../../Images/logo.png";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../../Redux/actions/AuthAction";
export default function Login() {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.AuthReduder.errorMessage);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // console.log(formData)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setError("");
  }, []);
  useEffect(() => {
    return () => {
      dispatch({ type: "CLEAR_ERROR_MESSAGE" }); // Clear the error message when the component unmounts
    };
  }, [dispatch]);

  useEffect(() => {
    setError(errorMessage);
  }, [errorMessage]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      setError("All fields are required");
    } else {
      // setislogin(true);
      setError("");

      dispatch(logIn(formData));
      console.log(errorMessage);
    }
  };

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
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="form--submit"> Login </button>
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
      </form>
    </div>
  );
}
