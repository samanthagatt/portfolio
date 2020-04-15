import React from 'react';
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects';
import About from './components/About';

const theme = createMuiTheme({
  typography: {
    fontFamily: "OpenDyslexicRegular, Roboto, Helvetica, Arial, sans-serif"
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Home id="home"
        title="Samantha Gatt" 
        details="iOS Developer" />
      <Projects id="projects" />
      <About id="about" />
    </ThemeProvider>
  );
}

export default App;
