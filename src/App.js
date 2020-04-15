import React from 'react';
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects';

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
      <Projects />
    </ThemeProvider>
  );
}

export default App;
