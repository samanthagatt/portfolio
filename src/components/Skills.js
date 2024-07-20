import React from "react";
import { Grid, Typography, List, ListItem } from "@mui/material";
import { Stack } from "@mui/system";

import { skills } from "../helpers/data";
import { evenOrOdd } from "../helpers/convenienceFunctions";
import Section from "./Section";
import CheckMarkIcon from "./CheckMarkIcon";

const Column = ({ group: { title, elements } }) =>
    <Stack spacing="1rem" sx={{ flex: 1 }}>
        <Typography variant="h4">{title}</Typography>
        <List>
            {elements.map((element, i) =>
                <ListItem key={i}>
                    <Stack component="span"
                        direction="row"
                        alignItems="center"
                        spacing="1rem">
                        <CheckMarkIcon height="0.75rem" />
                        <Typography>{element}</Typography>
                    </Stack>
                </ListItem>)}
        </List>
    </Stack>

const Skills = ({ sectionInfo: { id, index } }) =>
    <Section variant={evenOrOdd(index + 1)} id={id}>
        <Grid container>
            {skills.map((group) => <Column group={group} />)}
        </Grid>
    </Section>;

export default Skills;
