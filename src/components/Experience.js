import React from "react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

import { evenOrOdd } from "../helpers/convenienceFunctions";
import Section from "./Section";
import { education, work } from "../helpers/data";

const ExperienceColumn = ({ title, items }) =>
    <Stack sx={{ flex: 1 }} spacing="1.5rem" >
        <Typography variant="h4">{title}</Typography>
        <Stack spacing="1.5rem">{items}</Stack>
    </Stack>;

const ExperienceItem = ({ primary, secondary }) =>
    <Stack spacing="0.3rem">
        <Typography>{primary}</Typography>
        <Typography variant="body2">{secondary}</Typography>
    </Stack>;

const WorkItem = ({ item: { title, company, dateRange } }) =>
    <ExperienceItem primary={`${title} at ${company}`} secondary={dateRange} />;

const EducationItem = ({ item: { degree, institution, description } }) =>
    <ExperienceItem primary={`${degree} from ${institution}`} secondary={description} />;

const workItems = work.map((item, i) => <WorkItem item={item} key={i} />);

const educationItems = education.map((item, i) => <EducationItem item={item} key={i} />);

const Experience = ({ sectionInfo: { index, id } }) =>
    <Section variant={evenOrOdd(index + 1)} id={id}>
        <Stack direction={{ xs: "column", sm: "row" }}
            spacing={{ xxs: "3rem", sm: "3rem" }}>
            <ExperienceColumn title="Work history" items={workItems} />
            <ExperienceColumn title="Education" items={educationItems} />
        </Stack>
    </Section>;

export default Experience;
