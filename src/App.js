import React from "react";
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";

import "./App.css";
import "./MediaQueries.css";

const theme = createTheme({
    typography: {
        fontFamily: "Montserrat, Roboto, Helvetica, Arial, sans-serif"
    }
});

const homeSection = {
    id: "home",
    component: (id, index) => <Home
        sectionInfo={{ "id": id, "index": index }}
        scrollToExperience={() => scrollToSection(experienceSection.id)} />
}
const experienceSection = {
    id: "experience",
    component: (id, index) => <div id="experience"></div>
}
const skillsSection = {
    id: "skills",
    component: (id, index) => <div id="skills"></div>
}
const educationSection = {
    id: "education",
    component: (id, index) => <div id="education"></div>
}
const sections = [homeSection, experienceSection, skillsSection, educationSection]

const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
}

const App = () =>
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
            <Nav sectionIds={sections.map((section) => section.id)}
                scrollToSection={scrollToSection} />
            {sections.map((section, index) => section.component(section.id, index))}
        </ThemeProvider>
    </StyledEngineProvider>

export default App;
