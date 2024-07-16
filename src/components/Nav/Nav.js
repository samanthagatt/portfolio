import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar } from "@mui/material";
import { socials } from "../../data.js";

import "./Nav.css";
import { Stack } from "@mui/system";
import SGLogo from "./SGLogo.js"
import LinkedInLogo from "./LinkedInLogo.js";
import GitHubLogo from "./GitHubLogo.js";

const Nav = ({ sections, scrollToSection }) => {
  return (
    <AppBar position="fixed" id="app-bar">
      <Toolbar component="nav" className="main-content">
        <SGLogo />
        <Stack direction="row">
          {sections.map(section => (
            <button
              className="nav-item"
              onClick={() => scrollToSection(section.name)}>
              {section.name}
            </button>
          ))}
        </Stack>
        <div id="socials">
          <a href={socials.github} target="_blank">
            <LinkedInLogo className="social-icon" />
          </a>
          <a href={socials.linkedIn} target="_blank">
            <GitHubLogo className="social-icon" />
          </a>
        </div>
      </Toolbar>
    </AppBar>
  )
};

Nav.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Nav;