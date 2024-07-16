import React from "react";
import PropType from "prop-types";
import { Typography, Button } from "@mui/material";

import "./About.css";

const About = ({ sectionInfo, links }) => {
  return (
    <section id={sectionInfo.name} className="full-screen about-section">
      <Typography className="section-title" variant="h2">{sectionInfo.name}</Typography>
      <div className="about-buttons-list">
        {links.map(({name, url}) => (
          <Button
            key={name}
            className="contrast-bg-txt-w-hover about-button"
            variant="contained"
            size="large"
            href={url}
            target="_blank"
            rel="noopener noreferrer">
              {name}
          </Button>
        ))}
      </div>
    </section>
  )
};

About.propTypes = {
  section: PropType.string.isRequired,
  links: PropType.arrayOf(
    PropType.exact({
      name: PropType.string.isRequired,
      url: PropType.string.isRequired,
      download: PropType.bool.isRequired
    }
  )).isRequired
}

export default About;