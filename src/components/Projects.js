import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import ProjectCard from "./ProjectCard";

const projectsArr = [
  [
    "Copy List", 
    "An iOS app that aids in converting Spotify playlists to Apple Music playlists and vice versa",
    "https://github.com/samanthagatt/CopyList"
  ],
  [
    "Network Manager",
    "A wrapper over URLSession to remove the need for a lot of boiler plate code everytime you want to make a network request. Currently in refinement.",
    "https://github.com/samanthagatt/NetworkManager"
  ],
  [
    "Facial Exercises",
    "An app made during a 2-day hackathon that mimicks post-stroke exercises using ARKit to track movement of specific facial features.",
    "https://github.com/vukrado/Facial-Exercises"
  ],
  [
    "Flashcards",
    "An app that lets you create and organize flashcards whether they're typed or hand drawn on an iOS device. Made as an independent project during my education at Lambda School",
    "https://github.com/samanthagatt/Flashcards-App"
  ]
  ];

const useStyles = makeStyles(() => ({
  projects: {
    minHeight: "100vh",
    width: "100vw",
    color: "rgb(210, 210, 210)",
    textAlign: "center"
  },
  list: {
    marginBottom: 30
  },
  title: {
    paddingTop: 90,
    paddingBottom: 40
  }
}));

const Projects = ({id}) => {
  const classes = useStyles();
  return (
    <section id={id} className={classes.projects}>
      <Typography className={classes.title} variant="h2">Projects</Typography>
      <Grid container className={classes.list} justify="center" alignItems="center">
        {projectsArr.map(([title, body, link]) => (
          <ProjectCard title={title} body={body} link={link} />
        ))}
      </Grid>
    </section>
  )
};

export default Projects;