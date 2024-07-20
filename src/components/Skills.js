import React from "react";
import { Typography } from "@mui/material";

import Section from "./Section";
import { evenOrOdd } from "../helpers/convenienceFunctions";

const Skills = ({ sectionInfo: { id, index }}) =>
    <Section variant={evenOrOdd(index + 1)} id={id}>
        <Typography variant="h4">Skills</Typography>
    </Section>;

export default Skills;
