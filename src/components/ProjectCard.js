import React from "react";
import { Grid, Card, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: "rgb(210, 210, 210)",
    color: "rgb(47, 47, 47)",
    width: "23em",
    padding: 20,
    margin: 10,
    "&:hover": {
      color: "rgb(40, 40, 40)",
      backgroundColor: "rgb(180, 180, 180)"
    }
  }
}));

const ProjectCard = ({title, body, link}) => {
  const classes = useStyles();
  return (
    <Grid item 
      component="a" 
      href={link} 
      target="_blank"
      rel="noopener noreferrer"
      style={{textDecoration: "none"}}>
        <Card className={classes.card}>
          <Typography variant="h3" gutterBottom>{title}</Typography>
          <Typography variant="body1">{body}</Typography>
        </Card>
    </Grid>
  )
};

export default ProjectCard;