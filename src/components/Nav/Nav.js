import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar } from "@mui/material";
import { socials } from "../../data.js";

import "./Nav.css";
import { Stack } from "@mui/system";
import SGLogo from "./SGLogo.js"
import LinkedInLogo from "./LinkedInLogo.js";
import GitHubLogo from "./GitHubLogo.js";

const Nav = ({ sectionIds, scrollToSection }) => {
  return (
    <AppBar position="fixed" id="app-bar">
      <Toolbar component="nav" className="main-content">
        <SGLogo />
        <Stack direction="row">
          {sectionIds.map(id => (
            <button
              className="nav-item"
              onClick={() => scrollToSection(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </Stack>
        <div id="socials">
          <a href={socials.linkedIn} target="_blank" rel="noopener noreferrer">
            <LinkedInLogo className="social-icon" />
          </a>
          <a href={socials.gitHub} target="_blank" rel="noopener noreferrer">
            <GitHubLogo className="social-icon" />
          </a>
        </div>
      </Toolbar>
    </AppBar>
  )
};

Nav.propTypes = {
  sectionIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  scrollToSection: PropTypes.func.isRequired
}

export default Nav;