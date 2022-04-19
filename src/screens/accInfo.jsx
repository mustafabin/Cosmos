import React from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { store } from "../state/store";

export default function Login() {
  let navigate = useNavigate();
  return (
    <div className="acc-main-container">
      <Link
        to={"/"}
        onClick={() => {
          localStorage.clear();
          store.dispatch({ type: "set", payload: { name: "Guest" } });
          navigate("/");
        }}
      >
        <h1>Sign Out</h1>
      </Link>
    </div>
  );
}
