import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  projects: {
    minHeight: "100vh",
    width: "100vw",
    background: "rgb(47, 47, 47)"
  }
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <section id="projects" className={classes.projects}>
      
    </section>
  )
};

export default Projects;