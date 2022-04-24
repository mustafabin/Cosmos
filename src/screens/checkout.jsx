import React from "react";
import "../styles/Checkout.css";
import CheckoutCard from "../components/CheckoutCard";
import { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";

export default function Checkout() {
  const [content, setContent] = useState(<h3> No items in Checkout</h3>);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  let placeHolder = 0;
  let checkoutContent = () => {
    let cartArr = JSON.parse(localStorage.getItem("cart"));
    if (cartArr) {
      setContent(
        cartArr.map((item, i) => {
          // placeHolder += item.price * item.quantity;
          setSubtotal((prev) => item.price * item.quantity + prev);
          return <CheckoutCard key={i} planet={item}></CheckoutCard>;
        })
      );
    }
  };
  useEffect(() => {
    console.log(placeHolder);
    // setSubtotal(placeHolder);
  }, [content]);
  useEffect(() => {
    checkoutContent();
  }, []);
  return (
    <div className="checkout-main-container">
      <div className="checkout-flex-container">
        <div className="checkout-display">{content}</div>
        <div className="checkout-details">
          <div className="checkout-button">
            <h3>
              Subtotal: <span>{subtotal}</span>
            </h3>
            <h3>
              Tax: <span>{tax}</span>
            </h3>
            <h2>
              Total: <span>{total}</span>
            </h2>
            <button>Proceed to Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
