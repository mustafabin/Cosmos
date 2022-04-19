import "./styles/App.css";
import React from "react";
import Navbar from "./components/nav";
import { Routes, Route } from "react-router-dom";
import Errorpage from "./screens/error";
import LandingPage from "./screens/landing";
import LoginPage from "./screens/login";
import Checkout from "./screens/checkout";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="*" element={<Errorpage></Errorpage>}></Route>
      </Routes>
    </>
  );
}

export default App;
