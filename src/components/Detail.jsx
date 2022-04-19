import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material/";
import "../styles/detail.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';








const Detail = () => {
  const [detail, setDetail] = useState([]);
  let { id } = useParams()

  const fetchDetail = async () => {
    let response = await axios.get(
      "https://cosmos-shop.herokuapp.com/products/getById/:id"
    );
    setDetail(response.data);
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  return (
    <div className='detail-container'>
      <div className="detail-img-container">
        {/* image */}
        <img src={detail.image} alt="" />
      </div>
      <div className="detail-info-container">
        {/* title */}
        <h2 className="detail-title">{detail.title}</h2>
        {/* price */}
        <p className="detail-price">{detail.price}</p>
        <div className="detail-warranty-wrap">
          <p>Warranty!</p>
          <h4 className='detail-warranty'><CheckCircleIcon></CheckCircleIcon></h4>
        </div>
        <button className="detail-cart">Add To Cart</button>
        {/* description */}
        <p className="detail-description">{detail.description}</p>
        <Rating
          value={detail.rating}
          max={5}
          precision={0.1}
          size="large"
          readOnly
        />
      </div>
    </div>
  )
}

export default Detail