import React, { useState } from "react";
import { SwipeableDrawer, List, ListItem, ListItemText, Toolbar, IconButton, AppBar, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
  navBar: {
    backgroundColor: "rgba(200, 200, 200, 0.4)"
  },
  navDrawer: {
    color: "rgb(200, 200, 200)",
    backgroundColor: "rgb(60, 60, 60)"
  }
}));

const Nav = () => {
  const classes = useStyles();
  const [menuDisplayed, setMenuDisplayed] = useState(false);
  return (
    <AppBar position="fixed" className={classes.navBar}>
      <Toolbar component="nav">
        <IconButton edge="start" onClick={() => setMenuDisplayed(true)}>
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer classes={{paper: classes.navDrawer}}
          anchor="left"
          open={menuDisplayed}
          onClose={() => setMenuDisplayed(false)}
          onOpen={() => setMenuDisplayed(true)}>
            <List onClick={() => setMenuDisplayed(false)}>
              {["Home", "Projects", "About", "Contact"].map(text => (
                <ListItem button component="a" href={`#${text.toLowerCase()}`} key={text}>
                  <ListItemText primary={text}/>
                </ListItem>
              ))}
            </List>
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  )
};

export default Nav;