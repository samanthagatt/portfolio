import React from "react";
import { Typography } from "@mui/material";

import "./Home.css";

const Home = ({ sectionInfo }) => {
  return (
    <section id={sectionInfo.name} className="main-content">
      <div id="home-section">
        <Typography variant="h1" id="home-title" className="home-content">
          Samantha Gatt
        </Typography>
        <div className="home-content">
          <Typography variant="h2" id="home-subtitle">
            Software Engineer specialized in mobile iOS development
          </Typography>
          <Typography variant="h3" id="home-description">
            Result-oriented with superior problem-solving and critical thinking skills to tackle problems and develop innovative solutions.
          </Typography>
        </div>
      </div>
    </section>
  )
};

export default Home;