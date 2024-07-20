import React from "react";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

import { evenOrOdd } from "../convenienceFunctions";
import Section from "./Section";


const workItemData = [
    {
        title: "Lead iOS Developer",
        company: "S44 Energy",
        dateRange: "Sep. 2020 - Feb. 2024"
    },
    {
        title: "iOS Mobile Developer",
        company: "New Era Technology",
        dateRange: "July 2019 - Oct. 2019"
    },
    {
        title: "iOS Developer & Technical Lead",
        company: "Mobile Mentor",
        dateRange: "Sep. 2020 - Feb. 2024"
    }
];

const educationItemData = [
    {
        degree: "iOS Development Certificate",
        institution: "Bloom Institute of Technology",
        description: "6+ month software development and computer science academy"
    },
    {
        degree: "B.S. in Biology",
        institution: "Florida Gulf Coast University",
        description: "Conducted 3+ years of bioinformatic research (analysis of biological data through computer algorithms)"
    }
];

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

const workItems = workItemData.map((item, i) => <WorkItem item={item} key={i} />);

const educationItems = educationItemData.map((item, i) => <EducationItem item={item} key={i} />);

const Experience = ({ sectionInfo: { index, id } }) =>
    <Section variant={evenOrOdd(index + 1)} id={id}>
        <Stack direction={{ xs: "column", sm: "row" }}
            spacing={{ xxs: "3rem", sm: "3rem" }}
            sx={{ pt: "3rem" }}>
            <ExperienceColumn title="Work history" items={workItems} />
            <ExperienceColumn title="Education" items={educationItems} />
        </Stack>
    </Section>;

export default Experience;
