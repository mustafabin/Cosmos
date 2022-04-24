import React from "react";
import "../styles/Login.css";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import KeyIcon from "@mui/icons-material/Key";
import { store } from "../state/store";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [errorText, setErrorText] = useState("");
  const [errorClass, setErrorClass] = useState("");
  let formRef = useRef(null);
  let logUserin = async () => {
    let inputs = formRef.current.elements;
    let email = inputs["email"].value;
    let password = inputs["password"].value;
    try {
      const res = await axios.post(
        "https://comos-backend.herokuapp.com/users/login",
        {
          email: email,
          password: password,
        }
      );
      localStorage.setItem("jwt_token", res.data.token);
      store.dispatch({ type: "set", payload: res.data });
      navigate("/");
    } catch (error) {
      setErrorClass("login-register-error");
      setErrorText("Invaild username or password");
    }
  };

  return (
    <div className="login-main-container">
      <div className="login-card card">
        <h1>Sign In</h1>
        <form ref={formRef}>
          <h3>{errorText}</h3>
          <p>Email : </p>
          <input
            className={errorClass}
            onClick={() => setErrorText("")}
            type="text"
            name="email"
            placeholder="Enter Email"
          />

          <p>Password : </p>
          <input
            className={errorClass}
            onClick={() => setErrorText("")}
            name="password"
            type="password"
            placeholder="Enter Password"
          />
        </form>

        <div className="login-buttons">
          <Button
            onClick={() => navigate("/register")}
            className="register-button"
            variant="outlined"
            startIcon={<EditIcon fontSize="large"></EditIcon>}
          >
            Register
          </Button>
          <Button
            onClick={logUserin}
            className="login-button"
            variant="outlined"
            startIcon={<KeyIcon fontSize="large"></KeyIcon>}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
