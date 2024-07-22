import React, { useState } from "react";
import { AppBar, Toolbar, SwipeableDrawer, IconButton, Button } from "@mui/material";
import { Stack, useMediaQuery } from "@mui/system";
import { useTheme } from "@emotion/react";

import { externalLinks } from "../helpers/data.js";
import SGIcon from "./SGIcon.js";
import LinkedInIcon from "./LinkedInIcon.js";
import GitHubIcon from "./GitHubIcon.js";
import SourceCodeIcon from "./SourceCodeIcon.js";
import NavButtons from "./NavButtons.js";
import MenuIcon from "./MenuIcon.js";

const ExternalLinks = ({ sx = [] }) =>
    <Stack direction="row" spacing="1rem" justifyContent="center" sx={sx}>
        <Button component="a"
            href={externalLinks.sourceCode}
            target="_blank"
            rel="noopener noreferrer">
            <SourceCodeIcon height="1.25rem" />
        </Button>
        <Button component="a"
            href={externalLinks.linkedIn}
            target="_blank"
            rel="noopener noreferrer">
            <LinkedInIcon height="1.75rem" />
        </Button>
        <Button component="a"
            href={externalLinks.gitHub}
            target="_blank"
            rel="noopener noreferrer">
            <GitHubIcon height="1.75rem" />
        </Button>
    </Stack>;

const Header = ({ sectionIds, scrollToSection }) => {
    const theme = useTheme();
    const mdUpBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
    const [menuDisplayed, setMenuDisplayed] = useState(false);

    function onNavButtonClick(id) {
        scrollToSection(id);
        menuDisplayed && setMenuDisplayed(false);
    };

    const MenuButton = () =>
        <IconButton aria-label="menu" onClick={() => setMenuDisplayed(true)} sx={{
            color: theme.palette.primary.main,
            "&:hover": { color: theme.palette.accent1.main }
        }}>
            <MenuIcon height="1.25rem" />
        </IconButton>;

    return (
        <AppBar position="fixed">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Stack direction="row" spacing="2rem">
                    {/* Adding some padding to the top of the sg logo to make up for the descender of the g */}
                    <SGIcon height="2.5rem" style={{ paddingTop: "0.5rem" }} />
                    {mdUpBreakpoint &&
                        <Stack component="nav" direction="row" spacing="1.25rem">
                            {<NavButtons sectionIds={sectionIds}
                                onClick={onNavButtonClick} />}
                        </Stack>}
                </Stack>
                {mdUpBreakpoint ? <ExternalLinks /> : <MenuButton theme={theme} />}
                {!mdUpBreakpoint &&
                    <SwipeableDrawer open={menuDisplayed}
                        anchor="right"
                        onClose={() => setMenuDisplayed(false)}
                        onOpen={() => setMenuDisplayed(true)}>
                        <Stack component="nav" spacing="2rem" sx={{ p: "2rem 3rem" }}>
                            <NavButtons sectionIds={sectionIds} onClick={onNavButtonClick} />
                            <ExternalLinks sx={{ pt: "1rem" }} />
                        </Stack>
                    </SwipeableDrawer>}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
