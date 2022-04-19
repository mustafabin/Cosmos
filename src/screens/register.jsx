import React from "react";
import "../styles/Login.css";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { store } from "../state/store";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function Login() {
  let navigate = useNavigate();
  let formRef = useRef(null);

  let registerUser = async () => {
    let inputs = formRef.current.elements;
    let email = inputs["email"].value;
    let password = inputs["password"].value;
    let name = inputs["name"].value;
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
      console.log("credentials invalid");
    }
  };

  return (
    <div className="login-main-container">
      <div className="register-card card">
        <h1>Register</h1>
        <form ref={formRef}>
          <p>Name : </p>
          <input type="text" name="name" placeholder="Enter Name" />
          <p>Email : </p>
          <input type="text" name="email" placeholder="Enter Email" />

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
            onClick={registerUser}
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
