import React, { useState } from "react";
import { AppBar, Toolbar, SwipeableDrawer, IconButton, Divider, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Stack, useMediaQuery } from "@mui/system";
import { useTheme } from "@emotion/react";

import SGLogo from "./SGLogo.js";
import LinkedInLogo from "./LinkedInLogo.js";
import GitHubLogo from "./GitHubLogo.js";
import { externalLinks } from "../../data.js";
import SourceCodeIcon from "../SourceCodeIcon.js";

const ExternalLinks = ({ sx = [] }) =>
  <Stack direction="row" spacing="1rem" justifyContent="center" sx={sx}>
    <Button
      component="a"
      href={externalLinks.sourceCode}
      target="_blank"
      rel="noopener noreferrer">
      <SourceCodeIcon height="1.25rem" />
    </Button>
    <Button component="a"
      href={externalLinks.linkedIn}
      target="_blank"
      rel="noopener noreferrer">
      <LinkedInLogo height="1.75rem" />
    </Button>
    <Button component="a"
      href={externalLinks.gitHub}
      target="_blank"
      rel="noopener noreferrer">
      <GitHubLogo height="1.75rem" />
    </Button>
  </Stack>;

const Nav = ({ sectionIds, scrollToSection }) => {
  const theme = useTheme();
  const mdUpBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
  const [menuDisplayed, setMenuDisplayed] = useState(false);

  const NavButtons = () => sectionIds.map(id =>
    <Button onClick={() => scrollToSection(id)} key={id}>
      {id.charAt(0).toUpperCase() + id.slice(1)}
    </Button>
  );

  const MenuButton = () =>
    <IconButton aria-label="menu" onClick={() => setMenuDisplayed(true)}>
      <MenuIcon color="primary" sx={{ height: "2rem", width: "auto" }} />
    </IconButton>;

  return (<AppBar position="fixed">
    <Toolbar sx={{ justifyContent: "space-between" }}>
      <Stack direction="row" spacing="2rem">
        {/* Adding some padding to the top of the sg logo to make up for the descender of the g */}
        <SGLogo height="2.5rem" style={{ paddingTop: "0.5rem" }} />
        {mdUpBreakpoint &&
          <Stack component="nav" direction="row" spacing="1.25rem">
            {<NavButtons />}
          </Stack>}
      </Stack>
      {mdUpBreakpoint ? <ExternalLinks /> : <MenuButton theme={theme} />}
      {!mdUpBreakpoint &&
        <SwipeableDrawer open={menuDisplayed}
          anchor="right"
          onClose={() => setMenuDisplayed(false)}
          onOpen={() => setMenuDisplayed(true)}>
          <Stack component="nav" spacing="2rem" sx={{ p: "2rem 3rem" }}>
            <NavButtons />
            <ExternalLinks sx={{ pt: "1rem" }} />
          </Stack>
        </SwipeableDrawer>}
    </Toolbar>
  </AppBar>)
};

export default Nav;
