import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material/";
import "../styles/detail.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Detail = () => {
  const [detail, setDetail] = useState({});
  const [rating, setRating] = useState(0);
  let { id } = useParams();

  const fetchDetail = async () => {
    let response = await axios.get(
      `https://comos-backend.herokuapp.com/products/getById/${id}`
    );
    setDetail(response.data);
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  useEffect(() => {
    setRating(detail.rating);
  }, [detail]);
  let addToCart = () => {
    let isDupe = false;
    let currentCart = JSON.parse(localStorage.getItem("cart"));
    if (!currentCart)
      return localStorage.setItem("cart", JSON.stringify([detail]));
    currentCart.forEach((planet) => {
      if (planet._id == detail._id) {
        planet.quantity++;
        isDupe = true;
      }
    });
    if (!isDupe) currentCart.push(detail);
    localStorage.setItem("cart", JSON.stringify(currentCart));
  };
  return (
    <div className="detail-container">
      <div className="detail-img-container">
        <img src={detail.image} alt="" />
      </div>
      <div className="detail-info-container">
        <h2 className="detail-title">{detail.name}</h2>

        <p className="detail-price">${detail.price}</p>
        <div
          className={
            detail.warrenty === true
              ? "detail-warranty-wrap"
              : "detail-warranty-wrap-gray"
          }
        >
          <p>Warranty</p>
          <h4 className="detail-warranty">
            <CheckCircleIcon></CheckCircleIcon>
          </h4>
        </div>
        <div onClick={addToCart} className="detail-cart">
          Add To Cart
        </div>
        <p className="detail-description">{detail.description}</p>
        <Rating
          value={rating || null}
          max={5}
          precision={0.5}
          size="large"
          readOnly
        />
      </div>
    </div>
  );
};

export default Detail;
