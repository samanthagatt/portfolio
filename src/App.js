import React from "react";
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import FixedLinks from "./components/FixedLinks/FixedLinks";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

import { fixedLinks, aboutLInks, projects } from "./data";

import "./App.css";
import "./MediaQueries.css";

const theme = createTheme({
    typography: {
        fontFamily: "Montserrat, Roboto, Helvetica, Arial, sans-serif"
    }
});

const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" })
}

function App() {
    const homeSection = {
        "name": "Home",
        "component": (name, index) => <Home
            sectionInfo={{ "name": name, "index": index }}
            title="Samantha Gatt" subtitle="iOS Developer"
            scrollToNextSection={() => scrollToSection(sections[index + 1].id)} />
    }
    const projectsSection = {
        "name": "Projects",
        "component": (name, index) => <Projects
            sectionInfo={{ "name": name, "index": index }}
            projects={projects} />
    }
    const aboutSection = {
        "name": "About",
        "component": (name, index) => <About
            sectionInfo={{ "name": name, "index": index }}
            links={aboutLInks} />
    }
    const sections = [homeSection, projectsSection, aboutSection]
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Nav sections={sections}
                    scrollToSection={scrollToSection} />
                {sections.map((section, index) => section.component(section.name, index))}
                <FixedLinks linksArr={fixedLinks} />
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
