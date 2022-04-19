import { useParams } from "react-router-dom";
import React from "react";
import "../styles/detail.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const Detail = (props) => {

  
  const { id } = useParams();
  console.log(id);


  return (
    <div className="detail-container">
      <div className="detail-img-container">
        {/* image */}
        <img
          src="https://cdn.shopify.com/s/files/1/1003/3354/products/Front_4e864a0f-d25a-4e06-97f0-d955443a7464_1920x.jpg?v=1634593202"
          alt=""
        />
      </div>
      <div className="detail-info-container">
        {/* title */}
        <h2 className="detail-title">The Suit Jacket</h2>
        {/* price */}
        <p className="detail-price">$1,950</p>
        <div className="detail-warranty-wrap">
          <p>Warranty!</p>
          <h4 className="detail-warranty">
            <CheckCircleIcon></CheckCircleIcon>
          </h4>
        </div>
        <button className="detail-cart">Add To Cart</button>
        {/* description */}
        <p className="detail-description">
          The double-breasted Suit Jacket is designed to pivot seamlessly
          between formal and casual. The peaked lapels are a nod to traditional
          tailoring, and the relaxed dimensions provide room to layer with all
          of Seventh. The British high twist wool provides structure and
          texture, while Japanese cupro lining provides a silky soft interior
          touch. The suit jacket can be paired with matching double pleat
          trousers.
        </p>
      </div>
    </div>
  );
};
export default Detail;
