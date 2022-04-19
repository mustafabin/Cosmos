import "./styles/App.css";
import React from "react";
import Navbar from "./components/nav.jsx";
import { Routes, Route } from "react-router-dom";
import Errorpage from "./screens/error.jsx";
import LandingPage from "./screens/landing.jsx";
import LoginPage from "./screens/login.jsx";
import Checkout from "./screens/checkout.jsx";
import ProductDetail from "./components/Detail.jsx";
import RegisterPage from "./screens/register.jsx";
import AccountInfo from "./screens/accInfo.jsx";

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
        <Route path="/account" element={<AccountInfo></AccountInfo>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="*" element={<Errorpage></Errorpage>}></Route>
      </Routes>
    </>
  );
}

export default App;
