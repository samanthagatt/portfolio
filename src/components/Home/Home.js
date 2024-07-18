import React from "react";
import { Typography } from "@mui/material";

import "./Home.css";
import { resumeLink } from "../../data";


const Home = ({ sectionInfo, scrollToExperience }) => {
  return (
    <section id={sectionInfo.id} className="main-content section-parent">
      <div id="home-section">
        <Typography variant="h1" id="home-section-title" className="home-section-content">
          Samantha Gatt
        </Typography>
        <div id="home-section-right" className="home-section-content">
          <Typography variant="h2" id="home-section-subtitle">
            Software Engineer specialized in mobile iOS development
          </Typography>
          <Typography variant="h3" id="home-section-description">
            Result-oriented with excellent problem-solving and critical thinking skills to tackle problems and develop innovative solutions.
          </Typography>
          <div id="home-section-buttons">
            <button type="button" onClick={scrollToExperience} id="work-history-button" className="home-section-button">
              <Typography variant="button">
                My experience
              </Typography>
            </button>
            <a href={resumeLink} target="_blank"
              rel="noopener noreferrer"
              id="my-projects-button" className="home-section-button">
              <Typography variant="button">
                My resume
              </Typography>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Home;