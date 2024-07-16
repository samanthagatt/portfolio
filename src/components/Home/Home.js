import React from "react";
import { Typography } from "@mui/material";

import "./Home.css";

const Home = ({title, subtitle, sectionInfo, scrollToNextSection}) => {
  return (
    <section className="home-section main-content" id={sectionInfo.name}>
      <div className="home-main-content">
        <Typography id="home-title" variant="h1">
          {title}
        </Typography>
        <Typography id="home-subtitle" variant="h2">
          {subtitle}
        </Typography>
      </div>
      <button className="next-button" onClick={() => scrollToNextSection()}>
        <svg viewBox="0 0 800 350" className="down-arrow-svg">
          <g transform="matrix(1,0,0,1,0,8)">
            <path d="M30,30L400,300L770,33" className="down-arrow-line" />
          </g>
        </svg>
      </button>
    </section>
  )
};

export default Home;