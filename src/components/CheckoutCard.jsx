import React from "react";
import Divider from "@mui/material/Divider";
import { useState, useEffect } from "react";

const CheckoutCard = (props) => {
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
  let { planet, setCart, cart, index } = props;
  const [quantity, setQuantity] = useState(planet.quantity);
  let decrement = () => {
    if (quantity > 0) setQuantity((prev) => prev - 1);
  };
  let increment = () => {
    if (quantity < 9) setQuantity((prev) => prev + 1);
  };
  let updateValues = async () => {
    cart[index].quantity = quantity;
    setCart([...cart]);
  };
  useEffect(() => {
    //if quantity hits 0 delete item else update values
    quantity === 0
      ? setCart(cart.filter((item) => item._id !== planet._id))
      : updateValues();
  }, [quantity]);
  return (
    <div className="checkout-card">
      <img
        className="checkout-card-image"
        src={planet.image}
        alt={planet.name}
      />
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ bgcolor: stringToColor(planet.name) }}
      ></Divider>
      <div className="checkout-card-details">
        <h1>{planet.name}</h1>
        <Divider sx={{ width: planet.name.length * 5 + "%" }}></Divider>
        <p>{planet.description.slice(0, 80) + " . . . "}</p>
        <div className="checkout-card-bottom">
          <h2 onClick={decrement}>-</h2>
          <h1>{quantity}</h1>
          <h2 onClick={increment}>+</h2>
          <p>{"$" + planet.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
