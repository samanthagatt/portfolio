import React from "react";
import { Grid, Typography, List, ListItem } from "@mui/material";
import { Stack } from "@mui/system";

import { skills } from "../helpers/data";
import { evenOrOdd } from "../helpers/convenienceFunctions";
import Section from "./Section";
import CheckMarkIcon from "./CheckMarkIcon";

const Column = ({ group: { title, elements } }) =>
    <Stack spacing="1rem" sx={{ flex: 1, pr: "2rem", pb: "2rem" }}>
        <Typography variant="h4">{title}</Typography>
        <List>
            {elements.map((element, i) =>
                <ListItem key={i}>
                    <Stack component="span"
                        direction="row"
                        alignItems="center"
                        spacing="1rem">
                        <CheckMarkIcon height="0.75rem" style={{ flexShrink: 0 }} />
                        <Typography>{element}</Typography>
                    </Stack>
                </ListItem>)}
        </List>
    </Stack>;

const Skills = ({ sectionInfo: { id, index } }) =>
    /*
    Grid uses a negative margin so you have to add the same spacing to the 
    https://stackoverflow.com/a/61800046
    const spacing = 1;
    const paddingPx = spacing * parseInt(getComputedStyle(document.documentElement).fontSize);
    Adding `spacing` to the `Grid` container and `paddingPx` to the left and bottom of the `Section` padding made everything align but it didn't work for the footer
    ** Too inconsistent of behavior for me so I'm just avoiding spacing for now
    */
    <Section variant={evenOrOdd(index + 1)} id={id}>
        <Grid container>
            {skills.map((group, i) => <Column group={group} key={i} />)}
        </Grid>
    </Section>;

export default Skills;
