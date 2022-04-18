import React from "react";
import "../styles/landing.css";
import Video from "../media/video.mp4";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";
const Landing = () => {
  const state = useSelector((state) => state.user);
  return (
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
        <h1 className="landing-h1">The Space Shop!</h1>
        <p className="landing-p">One Stop For All Your Intergalactic Needs!</p>
        <div className="landing-btn-wrap">
          {/* add dynamic classes */}
          <HashLink smooth to="/#catalog">
            <button className="landing-btn">
              Catalog <ArrowDownwardIcon></ArrowDownwardIcon>
            </button>
          </HashLink>
        </div>
      </div>
    </div>
  );
};
export default Landing;
