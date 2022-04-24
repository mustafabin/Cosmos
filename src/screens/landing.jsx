import React from "react";
import "../styles/landing.css";
import Video from "../media/video.mp4";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import Catalog from "../components/catalog.jsx";
import { store } from "../state/store";

const Landing = () => {
  const user = useSelector((state) => state.user);
  let logUserin = async () => {
    let token = localStorage.getItem("jwt_token");
    try {
      const res = await axios.post(
        "https://comos-backend.herokuapp.com/users/me",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      store.dispatch({ type: "set", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify([]));
    logUserin();
  }, []);
  return (
    <div className="whole-landing-flex">
      <div className="landing-container">
        <div className="landing-bg">
          <video
            autoPlay
            muted
            loop
            src={Video}
            type="../media/video.mp4"
            className="landing-bg-vid"
          ></video>
        </div>
        <div className="landing-content">
          <h1 className="landing-h1">
            Hello, <p className="landing-user-name">{user.name}</p>
          </h1>
          <p className="landing-p">
            One Stop For All Your Intergalactic Needs!
          </p>
          <div className="landing-btn-wrap">
            <HashLink smooth to="/#catalog">
              <button className="landing-btn">
                Catalog <ArrowDownwardIcon></ArrowDownwardIcon>
              </button>
            </HashLink>
          </div>
        </div>
      </div>
      <div className="catalog-text">Catalog</div>
      <Catalog></Catalog>
    </div>
  );
};
export default Landing;
