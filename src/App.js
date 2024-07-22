import React from "react";
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { baseTheme, theme } from "./helpers/theme";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

import "./App.css";

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
    component: (info) => <Skills sectionInfo={info} key={info.index} />
};
const sections = [homeSection, projectsSection, experienceSection, skillsSection];

const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
};

const App = () => {
    const sectionIds = sections.map((section) => section.id)
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={createTheme(baseTheme, theme)}>
                <Header sectionIds={sectionIds} scrollToSection={scrollToSection} />
                {sections.map((section, index) =>
                    section.component({ id: section.id, index: index }))}
                <Footer sectionIds={sectionIds} onNavButtonClick={scrollToSection} />
            </ThemeProvider>
        </StyledEngineProvider>);
};

export default App;
