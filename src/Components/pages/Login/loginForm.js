import React, { useState } from "react";
// import "./form.css";
import Login from "./login";
import FirstPage from "../firstPage/FirstPage";
import NavBar from "../../NavBar/navBar";
import MainPage from "../MainPage/mainPage";

const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return <>{!isSubmitted ? <Login submitForm={submitForm} /> : <MainPage />}</>;
};

export default LoginForm;
