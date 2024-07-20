import React from "react";
import { Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";

import Section from "./Section";
import { externalLinks } from "../data";
import { evenOrOdd } from "../convenienceFunctions";

const Home = ({ sectionInfo: { index, id }, scrollToProjects }) =>
  <Section variant={evenOrOdd(index + 1)} id={id}>
    <Stack direction={{ sm: "column", md: "row" }}
      spacing={{ xxs: "1.5rem", md: "2rem" }}
      alignItems={{ sm: "flex-start", md: "flex-end" }}
      sx={{ pt: "6rem", pb: "4em" }}>
      <Typography variant="h1" sx={{ flex: 1 }}>
        Samantha Gatt
      </Typography>
      <Stack spacing="1rem" sx={{ flex: 1 }} justifyContent="flex-start">
        <Typography variant="h2">
          Software Engineer specialized in mobile iOS development
        </Typography>
        <Typography variant="h3">
          Result-oriented with excellent problem-solving and critical thinking skills to tackle problems and develop innovative solutions.
        </Typography>
        {/* Why does this need to specify xxs if I want all the same 🤔 */}
        <Stack spacing={{ xxs: "1rem" }}
          direction={{ xxs: "column", xs: "row" }}
          sx={{ pt: "1.5rem" }}>
          <Button variant="contained"
            onClick={scrollToProjects}>
            My projects
          </Button>
          <Button variant="outlined"
            component="a"
            href={externalLinks.resume}
            target="_blank"
            rel="noopener noreferrer">
            My resume
          </Button>
        </Stack>
      </Stack>
    </Stack>
  </Section>;

export default Home;
