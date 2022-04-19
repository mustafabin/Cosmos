import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material/";
import "../styles/detail.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { DetailsOutlined } from '@mui/icons-material';








const Detail = () => {
  const [detail, setDetail] = useState({});
  const [rating, setRating] = useState(0)
  let { id } = useParams()

  const fetchDetail = async () => {
    let response = await axios.get(
      `https://cosmos-shop.herokuapp.com/products/getById/${id}`
    );
    setDetail(response.data);
  };


  useEffect(() => {
    fetchDetail();
  }, [id]);

  useEffect(() => {
    setRating(detail.rating)
  }, [detail])

  return (
    <div className='detail-container'>
      <div className="detail-img-container">
        {/* image */}
        <img src={detail.image} alt="" />
      </div>
      <div className="detail-info-container">
        {/* title */}
        <h2 className="detail-title">{detail.name}</h2>
        {/* price */}
        <p className="detail-price">${detail.price}</p>
        <div className={detail.warrenty === true ? "detail-warranty-wrap" : "detail-warranty-wrap-gray"}>
          <p>Warranty</p>
          <h4 className='detail-warranty'><CheckCircleIcon></CheckCircleIcon></h4>
        </div>
        <button className="detail-cart">Add To Cart</button>
        {/* description */}
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
  )
}

export default Detail