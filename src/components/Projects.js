import React from "react";
import { Typography, Button, Grid } from "@mui/material";
import { Stack } from "@mui/system";

import { evenOrOdd } from "../helpers/convenienceFunctions";
import { projects } from "../helpers/data";
import Section from "./Section";
import SourceCodeIcon from "./SourceCodeIcon";
import AppStoreIcon from "./AppStoreIcon";

const Item = ({ item: { name, description, githubLink, appStoreLink } }) =>
    <Grid item sm={12} md={6}>
        <Stack spacing="0.5rem"
            sx={{ pr: "2rem", pb: "2rem" }}>
            <Typography>{name}</Typography>
            <Typography variant="body2">{description}</Typography>
            {(githubLink || appStoreLink) &&
                <Stack direction="row" spacing="0.75rem" sx={{ pt: "0.5rem" }}>
                    {appStoreLink &&
                        <Button component="a"
                            href={appStoreLink}
                            target="_blank"
                            rel="noopener noreferrer">
                            <AppStoreIcon height="2rem" />
                        </Button>}
                    {githubLink &&
                        <Button component="a"
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer">
                            <SourceCodeIcon height="1rem" />
                        </Button>}
                </Stack>}
        </Stack>
    </Grid>;

const Projects = ({ sectionInfo: { id, index } }) =>
    <Section variant={evenOrOdd(index + 1)} id={id}>
        <Stack spacing="2.25rem">
            <Typography variant="h4">Projects</Typography>
            <Grid container>
                {projects.map((item, i) => <Item item={item} key={i} />)}
            </Grid>
        </Stack>
    </Section>;

export default Projects;
