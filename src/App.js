import React from "react";
import { StylesProvider, createMuiTheme, ThemeProvider } from "@material-ui/core";

import FixedLinks from "./components/FixedLinks/FixedLinks";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

import { sections, fixedLinks, aboutLInks, projects } from "./data";

import "./App.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: "OpenDyslexicFont, Roboto, Helvetica, Arial, sans-serif"
  }
});

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Nav sections={sections} />
        <FixedLinks linksArr={fixedLinks} />
        <Home id={sections[0]}
          title="Samantha Gatt"
          subtitle="iOS Developer"
          nextSection={sections[1]} />
        <Projects section={sections[1]} projects={projects} />
        <About section={sections[2]} links={aboutLInks} />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
