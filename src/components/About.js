import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  about: {
    minHeight: "100vh",
    width: "100vw",
    color: "rgb(210, 210, 210)",
    textAlign: "center"
  },
  title: {
    paddingTop: 90,
    paddingBottom: 40
  },
  button: {
    fontSize: "1.3rem",
    background: "rgb(210, 210, 210)",
    color: "rgb(47, 47, 47)",
    margin: 10,
    "&:hover": {
      color: "rgb(40, 40, 40)",
      backgroundColor: "rgb(180, 180, 180)"
    }
  }
}));

const About = ({id}) => {
  const classes = useStyles();
  return (
    <section id={id} className={classes.about}>
      <Typography className={classes.title} variant="h2">About</Typography>
      <Button 
        className={classes.button}
        variant="contained" 
        href="https://github.com/samanthagatt"
        target="_blank">
          GitHub
      </Button>
      <Button 
        className={classes.button}
        variant="contained" 
        href="https://www.linkedin.com/in/samantha-gatt/"
        target="_blank">
          LinkedIn
      </Button>
      <Button 
        className={classes.button}
        variant="contained" 
        href="Samantha_Gatt_Software_Developer_Resume.pdf" 
        download>
          Download my resume
      </Button>
    </section>
  )
};

export default About;