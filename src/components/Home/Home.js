import React from "react";
import { Typography } from "@mui/material";

import "./Home.css";

const Home = ({title, subtitle, id, nextSection}) => {
  const scrollToNextSection = () => {
    document.getElementById(nextSection).scrollIntoView({ behavior: "smooth" })
  }
  return (
    <section className="full-screen code-bg-img home-section" id={id}>
      <div className="main-txt-shadow home-main-content">
        <Typography className="home-title" variant="h1">
          {title}
        </Typography>
        <Typography className="home-subtitle" variant="h2">
          {subtitle}
        </Typography>
      </div>
      <div className="next-button" onClick={() => scrollToNextSection()}>
        <Typography variant="h5" gutterBottom>{nextSection}</Typography>
        <svg viewBox="0 0 800 350" className="down-arrow-svg">
          <g transform="matrix(1,0,0,1,0,8)">
            <path d="M30,30L400,300L770,33" className="down-arrow-line" />
          </g>
        </svg>
      </div>
    </section>
  )
};

export default Home;