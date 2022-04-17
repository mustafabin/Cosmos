import React from "react";
import { useSelector } from "react-redux";

export default function Landing() {
  const state = useSelector((state) => state.user);
  return (
    <div className="Landing-main-container">
      <div id="landing" className="App">
        <h1>HELLO {state.name}</h1>
      </div>
      <div className="App"></div>
      <div className="App"></div>
      <div className="App"></div>
      <div id="catalog" className="main"></div>
    </div>
  );
}
