import React from "react";
import img from "../media/brandImage.png";
import "../styles/nav.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";

export default function Navbar() {
  const user = useSelector((state) => state.user);
  //hash function from stack overflow
  let stringToColor = (string) => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  };

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
  let grabLetter = () => {
    let nameArr = user.name.split(" ");
    if (nameArr.length < 2) {
      return nameArr[0].slice(0, 1).toUpperCase();
    } else {
      return (
        nameArr[0].slice(0, 1).toUpperCase() +
        nameArr[1].slice(0, 1).toUpperCase()
      );
    }
  };

  let AccountIcon = () => {
    if (!user.email) {
      return (
        <HashLink className="nav-hashlink" smooth to="/login">
          <AccountCircleIcon fontSize="inherit"></AccountCircleIcon>
        </HashLink>
      );
    } else {
      return (
        <HashLink className="nav-hashlink" smooth to="/account">
          <Avatar sx={{ bgcolor: stringToColor(user.name) }}>
            {grabLetter()}
          </Avatar>
        </HashLink>
      );
    }
  };
  return (
    <nav className={navClass}>
      <div className="nav-brand">
        <img src={img} alt="Galaxy" />
        <HashLink className="nav-brandlink " smooth to="/#landing">
          <h1 className="nav-brandlink">Cosmos</h1>
        </HashLink>
      </div>

      <div className="nav-options">
        <HashLink className="nav-hashlink" smooth to="/#landing">
          <h1>Home</h1>
        </HashLink>
        <HashLink className="nav-hashlink" smooth to="/#catalog">
          <h1>Catalog</h1>
        </HashLink>
      </div>

      <div className="nav-icons">
        {AccountIcon()}
        <HashLink className="nav-hashlink" smooth to="/checkout">
          <ShoppingCartCheckoutIcon fontSize="inherit"></ShoppingCartCheckoutIcon>
        </HashLink>
      </div>
    </nav>
  );
}
