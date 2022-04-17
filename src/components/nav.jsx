import React from "react";
import img from "../media/brandImage.png";
import "../styles/nav.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
export default function Navbar() {
  const [navClass, setNavClass] = useState("");
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      setNavClass("nav--hidden");
    } else {
      setNavClass("");
    }
    lastScrollY = window.scrollY;
  });
  return (
    <nav className={navClass}>
      <div className="nav-brand">
        <img src={img} alt="Galaxy" />
        <HashLink className="nav-brandlink " smooth to="/">
          <h1 className="nav-brandlink">Cosmos</h1>
        </HashLink>
      </div>

      <div className="nav-options">
        <HashLink className="nav-hashlink" smooth to="/">
          <h1>Home</h1>
        </HashLink>
        <HashLink className="nav-hashlink" smooth to="/">
          <h1>Catalog</h1>
        </HashLink>
      </div>

      <div className="nav-icons">
        <HashLink className="nav-hashlink" smooth to="/">
          <AccountCircleIcon fontSize="inherit"></AccountCircleIcon>
        </HashLink>
        <HashLink className="nav-hashlink" smooth to="/">
          <ShoppingCartCheckoutIcon fontSize="inherit"></ShoppingCartCheckoutIcon>
        </HashLink>
      </div>
    </nav>
  );
}
