import React from "react";
import "../styles/ProductCard.css";
function ProductCard(props) {
  return (
    <div>
      <li className="productCard">
        <ul className="productCardItem">{props.product.name}</ul>
        <ul className="productCardItem">
          <img className="cardImage" src={props.product.img} />
        </ul>
        <ul className="productCardItem">{props.product.price}</ul>
      </li>
    </div>
  );
}
export default ProductCard;
