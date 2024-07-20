import React from "react";
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { evenOrOdd } from "./convenienceFunctions";
import { baseTheme, theme } from "./theme";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Section from "./components/Section";

import "./App.css";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const homeSection = {
    id: "home",
    component: (info) =>
        <Home sectionInfo={info}
            scrollToProjects={() => scrollToSection(projectsSection.id)}
            key={info.index} />
};
const projectsSection = {
    id: "projects",
    component: (info) => <Projects sectionInfo={info} key={info.index} />
};
const experienceSection = {
    id: "experience",
    component: (info) => <Experience sectionInfo={info} key={info.index} />
};
const skillsSection = {
    id: "skills",
    component: (info) =>
        <Section variant={evenOrOdd(info.index + 1)}
            className="full-screen"
            id={info.id}
            key={info.index} />
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
            {sections.map((section, index) =>
                section.component({ id: section.id, index: index }))}
        </ThemeProvider>
    </StyledEngineProvider>;

export default App;
