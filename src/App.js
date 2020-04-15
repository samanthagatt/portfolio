import React from 'react';
import { ThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core";
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects';
import About from './components/About';

const theme = createMuiTheme({
  typography: {
    fontFamily: "OpenDyslexicRegular, Roboto, Helvetica, Arial, sans-serif"
  }
});

const useStyles = makeStyles(() => ({
  links: {
    display: "inline-block",
    position: "fixed",
    bottom: "1em",
    right: "2em"
  },
  link: {
    fontFamily: "OpenDyslexicRegular, Roboto, Helvetica, Arial, sans-serif",
    textDecoration: "none",
    color: "rgb(47, 47, 47)",
    background: "rgba(210, 210, 210, 0.4)",
    padding: "1em",
    margin: "1em",
    borderRadius: "10px 10px 0 0",
    border: "1px solid rgba(47, 47, 47, 0.4)"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <div className={classes.links}>
        <a href="https://github.com/samanthagatt/portfolio" 
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}>
            Source code
        </a>
        <a href="https://opendyslexic.org/" 
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}>
            Open Dyslexic Font
        </a>
      </div>
      <Home id="home"
        title="Samantha Gatt" 
        details="iOS Developer" />
      <Projects id="projects" />
      <About id="about" />
    </ThemeProvider>
  );
}

export default App;
