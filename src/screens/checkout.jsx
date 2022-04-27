import React from "react";
import "../styles/Checkout.css";
import CheckoutCard from "../components/CheckoutCard";
import { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";

export default function Checkout() {
  const [content, setContent] = useState(<h3> No items in Checkout</h3>);
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(subtotal * 0.09);
  const [total, setTotal] = useState(subtotal + tax);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  //this function populates the checkout aslong as there is items in the cart
  let checkoutContent = () => {
    cart.length !== 0
      ? setContent(
          cart.map((item, i) => {
            return (
              <CheckoutCard
                key={i}
                index={i}
                cart={cart}
                setCart={setCart}
                planet={item}
                amount={item.quantity}
              ></CheckoutCard>
            );
          })
        )
      : setContent(<h3> No items in Checkout</h3>);
  };
  //updates the totals
  useEffect(() => {
    let placeHolder = 0;
    if (cart)
      cart.forEach((item) => {
        placeHolder += item.price * item.quantity;
      });
    setSubtotal(placeHolder);
  }, [content]);
  //once subtotal changes update tax
  useEffect(() => {
    setTax(subtotal * 0.09);
  }, [subtotal]);
  //update total once tax changes
  useEffect(() => {
    setTotal(tax + subtotal);
  }, [tax]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    checkoutContent();
  }, [cart]);
  return (
    <div className="checkout-main-container">
      <div className="checkout-flex-container">
        <div className="checkout-display">{content}</div>
        <div className="checkout-details">
          <h3>
            Subtotal: <span>{subtotal}</span>
          </h3>
          <h3>
            Tax: <span>{tax.toFixed(2)}</span>
          </h3>
          <Divider></Divider>
          <h2>
            Total: <span>{total.toFixed(2)}</span>
          </h2>
          <div className="checkout-button">
            <p>No Payment</p>
            <span aria-label="hiding" role="img">
              🙈
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
