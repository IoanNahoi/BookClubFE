import React from "react";
import NavBar from "../../NavBar/navBar";
import registerUserForm from "./registerUseForm";
import registerValidation from "./registerValidation";
import Form from "./form";
import "./form.css";
const Register = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = registerUserForm(
    submitForm,
    registerValidation
  );
  return (
    <>
      {/* <div className="navbar">
        <NavBar />
      </div> */}
      <div className="form-content-right">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <h1>Create you account!</h1>
          <div className="form-inputs">
            <label className="form-label">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              classname="form-input"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              classname="form-input"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              classname="form-input"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">FirstName</label>
            <input
              id="firstname"
              type="text"
              name="firstname"
              classname="form-input"
              placeholder="Enter your First Name"
              value={values.firstname}
              onChange={handleChange}
            />
            {errors.firstname && <p>{errors.firstname}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Last name </label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              classname="form-input"
              placeholder="Enter your last name"
              value={values.lastname}
              onChange={handleChange}
            />
            {errors.lastname && <p>{errors.lastname}</p>}
          </div>
          <button className="form-input-btn" type="submit">
            Sign up
          </button>
          <span className="form-input-login">
            Already have an account? Log in <a href="Login"> here</a>
          </span>
        </form>
      </div>
    </>
  );
};
export default Register;
