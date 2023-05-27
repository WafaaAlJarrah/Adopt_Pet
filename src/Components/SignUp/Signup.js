import "./Signup.css";
import Logo from "../../Images/logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../Redux/actions/AuthAction";
export default function Signup() {
  // const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNB: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);
  const dispatch = useDispatch();
  // console.log(formData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //   function handleChange(event) {
  //     const { name, value, type, checked } = event.target;
  //     setFormData((prevFormData) => ({
  //       ...prevFormData,
  //       [name]: type === "checkbox" ? checked : value,
  //     }));
  //   }

  function handleSubmit(event) {
    event.preventDefault();

    formData.password === formData.confirmPassword
      ? dispatch(signUp(formData))
      : setConfirmPass(false);
    // if (formData.password !== formData.confirmPassword) {
    //   setConfirmPass(false);
    //   console.log("Password Doesn't Match");
    // } else {
    //   console.log("Successfully Signed up");
    //   return;
    // }
  }

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
        <button className="form--submit" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}
