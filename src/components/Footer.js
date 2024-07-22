import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Stack, styled } from "@mui/system";

import { footerLInks } from "../helpers/data";
import { contentHorizontalPadding } from "../helpers/theme";
import SGIcon from "./SGIcon";
import NavButtons from "./NavButtons";

const PaddedGrid = styled(Grid)(() => ({
    flex: 1,
    paddingRight: "3rem",
    paddingBottom: "2rem"
}))

const Footer = ({ sectionIds, onNavButtonClick }) => {
    const theme = useTheme();
    return (
        <Grid container
            component="footer"
            alignItems="flex-start"
            justifyContent="flex-end"
            sx={{
                bgcolor: theme.palette.primary.main,
                color: theme.palette.secondary.main,
                ...contentHorizontalPadding(),
                paddingTop: "2rem",
                paddingBottom: "1.5rem"
            }}>
            <PaddedGrid item>
                <SGIcon height="8rem" style={{ color: theme.palette.secondary.main }} />
            </PaddedGrid>
            <PaddedGrid item>
                <Stack spacing="0.75rem">
                    <Typography variant="h6">Navigation</Typography>
                    <Stack alignItems="flex-start" spacing="0.25rem">
                        <NavButtons sectionIds={sectionIds} onClick={onNavButtonClick} sx={{
                            textDecoration: "underline",
                            "&:hover": { textDecoration: "underline" }
                        }} />
                    </Stack>
                </Stack>
            </PaddedGrid>
            <PaddedGrid item>
                <Stack spacing="0.75rem">
                    <Typography variant="h6">Links</Typography>
                    <Stack alignItems="flex-start" spacing="0.25rem">
                        {footerLInks.map((link, i) =>
                            <Button component="a"
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={i}
                                sx={{
                                    textDecoration: "underline",
                                    "&:hover": { textDecoration: "underline" }
                                }}>
                                {link.name}
                            </Button>)}
                    </Stack>
                </Stack>
            </PaddedGrid>
        </Grid>
    );
}

export default Footer;
