import "./styles/App.css";
import React from "react";
import Navbar from "./components/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import Errorpage from "./screens/error";
import LandingPage from "./screens/landing";
import LoginPage from "./screens/login";
import Checkout from "./screens/checkout";
import ProductDetail from "./components/Detail";
import RegisterPage from "./screens/register.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route
          path="/products/:id"
          element={<ProductDetail></ProductDetail>}
        ></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="*" element={<Errorpage></Errorpage>}></Route>
      </Routes>
    </>
  );
}

export default App;
