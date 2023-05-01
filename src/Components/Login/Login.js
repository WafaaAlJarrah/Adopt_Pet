import "./Login.css";
import Logo from "../../Images/logo.png";
import React from "react";

export default function Signup() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  //console.log(formData)
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.password === formData.passwordConfirm) {
      console.log("Successfully Signed up");
    } else {
      console.log("Password Doesn't Match");
      return;
    }
  }

  return (
    <div className="form--container">
      <h3>
        Find your loyal companion and give them a forever home <br />
      </h3>
      <form className="form" onSubmit={handleSubmit}>
        <img src = {Logo} alt="background" height={200}/>
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
        <button className="form--submit"> Login </button>
      </form>
    </div>
  );
}
