import React from "react";
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { evenOrOdd } from "./convenienceFunctions";
import { theme } from "./theme";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home";
import Section from "./components/Section";

import "./App.css";

const homeSection = {
    id: "home",
    component: (id, index) => <Home key={index} sectionInfo={{ "id": id, "index": index }}
        scrollToExperience={() => scrollToSection(experienceSection.id)} />
};
const experienceSection = {
    id: "experience",
    component: (id, index) => <Section variant={evenOrOdd(index+1)} id="experience" className="full-screen" key={index}></Section>
};
const skillsSection = {
    id: "skills",
    component: (id, index) => <Section variant={evenOrOdd(index+1)} id="skills" className="full-screen" key={index}></Section>
};
const educationSection = {
    id: "education",
    component: (id, index) => <Section variant={evenOrOdd(index+1)} id="education" className="full-screen" key={index}></Section>
};
const sections = [homeSection, experienceSection, skillsSection, educationSection];

const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
};

const App = () =>
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={createTheme(theme)}>
            <Nav sectionIds={sections.map((section) => section.id)}
                scrollToSection={scrollToSection} />
            {sections.map((section, index) => section.component(section.id, index))}
        </ThemeProvider>
    </StyledEngineProvider>;

export default App;
