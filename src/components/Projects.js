import React from "react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

import { evenOrOdd } from "../convenienceFunctions";
import { projects } from "../data";
import Section from "./Section";

const Column = ({ items }) =>
    <Stack sx={{ flex: 1 }} spacing="1.25rem">
        {items.map((item, i) => <Item item={item} key={i} />)}
    </Stack>;

const Item = ({ item: { name, description } }) =>
    <Stack spacing="0.5rem">
        <Typography>{name}</Typography>
        <Typography variant="body2">{description}</Typography>
    </Stack>;

const halfway = Math.ceil(projects.length / 2)
const firstHalf = projects.slice(0, halfway)
const secondHalf = projects.slice(halfway)

const Projects = ({ sectionInfo: { id, index } }) =>
    <Section variant={evenOrOdd(index + 1)} key={id}>
        <Stack spacing="2rem">
            <Typography variant="h4">Projects</Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: "1.25rem", sm: "3rem" }}>
                <Column items={firstHalf} />
                <Column items={secondHalf} />
            </Stack>
        </Stack>
    </Section>;

export default Projects;
