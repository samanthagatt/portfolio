import React, { useState } from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, IconButton, SwipeableDrawer, ListItem, ListItemText, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import "./Nav.css";

const Nav = ({ sections }) => {
  const [menuDisplayed, setMenuDisplayed] = useState(false);
  return (
    <AppBar position="fixed" className="sheer-bg">
      <Toolbar component="nav">
        <IconButton className="main-txt menu-button hover-on-sheer-bg"
          edge="start"
          onClick={() => setMenuDisplayed(true)}>
            <MenuIcon className="menu-icon" />
        </IconButton>
        <SwipeableDrawer anchor="top"
          classes={{paper: "main-txt nav-drawer"}}
          open={menuDisplayed}
          onClose={() => setMenuDisplayed(false)}
          onOpen={() => setMenuDisplayed(true)}>
            <List onClick={() => setMenuDisplayed(false)}>
              {sections.map(section => (
                <ListItem button
                  className="nav-item"
                  component="a"
                  href={`#${section}`}
                  key={section}>
                    <ListItemText primary={section} />
                </ListItem>
              ))}
            </List>
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  )
};

Nav.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Nav;