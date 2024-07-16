import React from "react";
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import FixedLinks from "./components/FixedLinks/FixedLinks";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

import { sections, fixedLinks, aboutLInks, projects } from "./data";

import "./App.css";
import "./MediaQueries.css";

const theme = createTheme({
  typography: {
    fontFamily: "OpenDyslexicFont, Roboto, Helvetica, Arial, sans-serif"
  }
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Nav sections={sections} />
        <Home id={sections[0]}
          title="Samantha Gatt"
          subtitle="iOS Developer"
          nextSection={sections[1]} />
        <Projects section={sections[1]} projects={projects} />
        <About section={sections[2]} links={aboutLInks} />
        <FixedLinks linksArr={fixedLinks} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
