import React from "react";
import { Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";

import Section from "./Section";
import { resumeLink } from "../data";
import { evenOrOdd } from "../convenienceFunctions";

const Home = ({ sectionInfo, scrollToExperience }) =>
  <Section variant={evenOrOdd(sectionInfo.index + 1)} id={sectionInfo.id}>
    <Stack direction={{ sm: "column", md: "row" }}
      spacing={{xs: "1.5rem", md: "2rem" }}
      alignItems={{ sm: "flex-start", md: "flex-end" }}
      sx={{ pt: "6rem", pb: "4.75em" }}>
      <Typography variant="h1" sx={{ flex: 1 }}>
        Samantha Gatt
      </Typography>
      <Stack spacing="1rem" sx={{ flex: 1 }}>
        <Typography variant="h2">
          Software Engineer specialized in mobile iOS development
        </Typography>
        <Typography variant="h3">
          Result-oriented with excellent problem-solving and critical thinking skills to tackle problems and develop innovative solutions.
        </Typography>
        {/* Why does this need to specify xs and md if they're the same 🤔 */}
        <Stack spacing={{xs: "1rem", md: "1rem" }}
          direction={{ sm: "column", md: "row" }}
          sx={{ pt: "1.5rem" }}>
          <Button variant="contained"
            onClick={scrollToExperience}>
            My experience
          </Button>
          <Button variant="outlined"
            component="a"
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer">
            My resume
          </Button>
        </Stack>
      </Stack>
    </Stack>
  </Section>;

export default Home;
