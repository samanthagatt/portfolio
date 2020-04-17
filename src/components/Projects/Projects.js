import React from "react";
import { Grid, Card, Typography } from "@material-ui/core";

import "./Projects.css";

const ProjectCard = ({title, body, link}) => {
  return (
    <Grid item
      component="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer">
        <Card className="contrast-bg-txt-w-hover project-card">
          <Typography variant="h3" gutterBottom>{title}</Typography>
          <Typography variant="body1">{body}</Typography>
        </Card>
    </Grid>
  )
}

const Projects = ({section, projects}) => {
  return (
    <section id={section} className="full-screen">
      <Typography className="section-title" variant="h2">{section}</Typography>
      <Grid container
        justify="center"
        alignItems="center">
          {projects.map(([title, body, link], i) => (
            <ProjectCard key={i} title={title} body={body} link={link} />
          ))}
      </Grid>
    </section>
  )
};

export default Projects;