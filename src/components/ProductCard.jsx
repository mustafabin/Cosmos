import React from "react";
import "../styles/ProductCard.css";

function ProductCard(props) {

  return (
    <div>
      <ul className="productCard">
        <li className="productCardItem">
          <img className="cardImage" src={props.product.image} />
        </li>
        <li className="productCardItem">{props.product.name}</li>
        <li className="productCardItem">{"$"+props.product.price}</li>
      </ul>
    </div>
  );
}
export default ProductCard;
