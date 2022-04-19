import React from "react";
import "../styles/ProductCard.css";

function ProductCard(props) {

  return (
    <div>
      <ul className="productCard">
        <li className="productCardItem" key={props.index}>
          <img className="cardImage" src={props.product.image} alt="planetImage"/>
        </li>
        <li className="productCardItem" key={props.index}> {props.product.name} </li>
        <li className="productCardItem" key={props.index}> {"$"+props.product.price} </li>
      </ul>
    </div>
  );
}
export default ProductCard;
