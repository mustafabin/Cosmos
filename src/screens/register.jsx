import React from "react";
import "../styles/Login.css";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { store } from "../state/store";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function Login() {
  let navigate = useNavigate();
  let formRef = useRef(null);
  const [errorText, setErrorText] = useState("");
  const [errorClass, setErrorClass] = useState("");
  let inputs = "";
  let email = "";
  let password = "";
  let name = "";

  let getInputs = () => {
    inputs = formRef.current.elements;
    email = inputs["email"].value;
    password = inputs["password"].value;
    name = inputs["name"].value;
  };
  let registerUser = async () => {
    try {
      const res = await axios.post(
        "https://comos-backend.herokuapp.com/users/register",
        {
          name: name,
          email: email,
          password: password,
        }
      );
      localStorage.setItem("jwt_token", res.data.token);
      store.dispatch({ type: "set", payload: res.data });
      navigate("/");
    } catch (error) {
      setErrorClass("login-register-error");
      setErrorText("User already exists");
    }
  };
  let displayIncorrectEmail = () => {
    setErrorClass("login-register-error");
    setErrorText("Not a vaild email");
  };
  return (
    <div className="login-main-container">
      <div className="register-card card">
        <h1>Register</h1>
        <form ref={formRef}>
          <h3>{errorText}</h3>

          <p>Name : </p>
          <input type="text" name="name" placeholder="Enter Name" />
          <p>Email : </p>

          <input
            className={errorClass}
            onClick={() => setErrorText("")}
            type="text"
            name="email"
            placeholder="Enter Email"
          />

          <p>Password : </p>
          <input name="password" type="password" placeholder="Enter Password" />
        </form>

        <div className="login-buttons">
          <Button
            onClick={() => navigate("/login")}
            className="back-button"
            variant="outlined"
            startIcon={<KeyboardDoubleArrowRightIcon fontSize="large" />}
          >
            Go Back
          </Button>
          <Button
            onClick={() => {
              getInputs();
              email.includes("@") ? registerUser() : displayIncorrectEmail();
            }}
            className="register-button"
            variant="outlined"
            startIcon={<EditIcon fontSize="large"></EditIcon>}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
