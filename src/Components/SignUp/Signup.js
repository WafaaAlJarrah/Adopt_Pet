import "./Signup.css";
import Logo from "../../Images/logo.png";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../Redux/actions/AuthAction";
export default function Signup() {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.AuthReduder.errorMessage);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    setErrorMsg(""); // Set the error state to an empty string when the component is first rendered
  }, []);

  useEffect(() => {
    return () => {
      dispatch({ type: "CLEAR_ERROR_MESSAGE" });
    };
  }, [dispatch]);

  useEffect(() => {
    setErrorMsg(errorMessage);
  }, [errorMessage]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNB: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);
  // console.log(formData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const phoneRegex = /^([0-9]{2})[- .]?([0-9]{6})$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.phoneNB
    ) {
      setErrorMsg("All fields are required");
    } else if (!emailRegex.test(formData.email)) {
      setErrorMsg("Invalid email address");
    } else if (formData.password.length < 8) {
      setErrorMsg("Password must be at least 8 characters");
    } else if (!phoneRegex.test(formData.phoneNB)) {
      setErrorMsg("Invalid Phone number ");
    } else if (formData.password !== formData.confirmPassword) {
      setConfirmPass(false);
      setErrorMsg("Confirm Password is not same ");
    } else {
      setErrorMsg(" ");

      // setislogin(true);

      dispatch(signUp(formData));
      console.log(errorMsg);
    }
    // formData.password === formData.confirmPassword
    //   ? dispatch(signUp(formData))
    //   : setConfirmPass(false);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <img src={Logo} alt="background" height={200} />
        <input
          type="text"
          placeholder="Full Name"
          className="form-input"
          name="fullName"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email address"
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
        <input
          type="password"
          placeholder="Confirm password"
          className="form-input"
          onChange={handleChange}
          name="confirmPassword"
          value={formData.passwordConfirm}
        />
        <span
          className="confirmPass"
          style={{
            display: confirmPass ? "none" : "block",
          }}
        >
          * Please confirm your password correctly!
        </span>
        <input
          type="tel"
          placeholder="Phone Number"
          className="form-input"
          name="phoneNB"
          onChange={handleChange}
          value={formData.phoneNB}
        />
        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
        <button className="form--submit" type="submit">
          Sign up
        </button>

        <div className="row" style={{ marginBottom: "5px" }}>
          <span
            style={{
              fontSize: "14 px",
              cursor: "pointer",
              textDecoration: "underline",
              marginRight: "5px",
            }}
          >
            Already have an account?
          </span>
          <Link to={"/Login"} style={{ textDecoration: "none" }}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
