import React from "react";
import { Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";

import { evenOrOdd } from "../helpers/convenienceFunctions";
import { projects } from "../helpers/data";
import Section from "./Section";
import SourceCodeIcon from "./SourceCodeIcon";
import AppStoreIcon from "./AppStoreIcon";

const Column = ({ items }) =>
    <Stack sx={{ flex: 1 }} spacing="2rem">
        {items.map((item, i) => <Item item={item} key={i} />)}
    </Stack>;

const Item = ({ item: { name, description, githubLink, appStoreLink } }) =>
    <Stack spacing="0.5rem">
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
    </Stack>;

const halfway = Math.ceil(projects.length / 2)
const firstHalf = projects.slice(0, halfway)
const secondHalf = projects.slice(halfway)

const Projects = ({ sectionInfo: { id, index } }) =>
    <Section variant={evenOrOdd(index + 1)} id={id}>
        <Stack spacing="2.25rem">
            <Typography variant="h4">Projects</Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: "1.25rem", sm: "3rem" }}>
                <Column items={firstHalf} />
                <Column items={secondHalf} />
            </Stack>
        </Stack>
    </Section>;

export default Projects;
