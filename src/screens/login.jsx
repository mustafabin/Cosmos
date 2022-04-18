import React from "react";
import "../styles/Login.css";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import KeyIcon from "@mui/icons-material/Key";
import { store } from "../state/store";

export default function Login() {
  let logUserin = (e) => {
    store.dispatch({ type: "set", payload: "test" });
  };
  return (
    <div className="login-main-container">
      <div className="login-card">
        <h1>Sign In</h1>
        <div className="login-email-field">
          <p>Email : </p>
          <input type="text" placeholder="Enter Email" />
        </div>
        <div className="login-password-field">
          <p>Password : </p>
          <input type="text" type="password" placeholder="Enter Password" />
        </div>
        <div className="login-buttons">
          <Button
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
