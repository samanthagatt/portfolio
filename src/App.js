import React from "react";
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { evenOrOdd } from "./convenienceFunctions";
import { baseTheme, theme } from "./theme";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home";
import Section from "./components/Section";

import "./App.css";

const homeSection = {
    id: "home",
    component: (id, index) => <Home key={index} sectionInfo={{ "id": id, "index": index }}
    scrollToProjects={() => scrollToSection(projectsSection.id)} />
};
const projectsSection = {
    id: "projects",
    component: (id, index) => <Section variant={evenOrOdd(index+1)} id={id} className="full-screen" key={index}></Section>
};
const experienceSection = {
    id: "experience",
    component: (id, index) => <Section variant={evenOrOdd(index+1)} id={id} className="full-screen" key={index}></Section>
};
const skillsSection = {
    id: "skills",
    component: (id, index) => <Section variant={evenOrOdd(index+1)} id={id} className="full-screen" key={index}></Section>
};
const sections = [homeSection, projectsSection, experienceSection, skillsSection];

const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
};

const App = () =>
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={createTheme(baseTheme, theme)}>
            <Nav sectionIds={sections.map((section) => section.id)}
                scrollToSection={scrollToSection} />
            {sections.map((section, index) => section.component(section.id, index))}
        </ThemeProvider>
    </StyledEngineProvider>;

export default App;
