import "./Signup.css";
import Logo from "../../Images/logo.png";
import React from "react";

export default function Signup() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordConfirm: "",
    });

    //console.log(formData)
    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
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
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <img src = {Logo} alt="background" height={200}/>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="form-input"
                    name="full name"
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
                    name="passwordConfirm"
                    value={formData.passwordConfirm}
                />
                <input
                    type="tel"
                    placeholder="Phone Number"
                    className="form-input"
                    name="phone number"
                />
                <button className="form--submit">Sign up</button>
            </form>
        </div>
    );
    } 