import React from 'react';
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Home from './components/Home';

const theme = createMuiTheme({
  typography: {
    fontFamily: "OpenDyslexicMono, Roboto, Helvetica, Arial, sans-serif"
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home title="Samantha Gatt" details="iOS Developer" />
    </ThemeProvider>
  );
}

export default App;
