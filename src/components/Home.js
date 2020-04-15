import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  fullScreen: {
    height: "100vh",
    minHeight: "10em",
    backgroundImage: "url('code.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  home: {
    color: "rgb(210, 210, 210)",
    textShadow: "0 0 10px rgba(210, 210, 210, 0.4)",
    display: "inline-flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  typedFirst: {
    textAlign: "right",
    overflow: "hidden",
    borderRight: "0.45em solid transparent",
    whiteSpace: "nowrap",
    width: 0,
    marginBottom: "0.5em",
    animation: "$type-text 4s steps(40, end) forwards, $blink-cursor 0.75s step-end 7"
  },
  typedSecond: {
    textAlign: "right",
    overflow: "hidden",
    borderRight: "0.45em solid transparent",
    whiteSpace: "nowrap",
    width: 0,
    animation: "$type-text 4s steps(40, end) 5s forwards, $blink-cursor .75s step-end infinite 5s"
  },
  "@keyframes type-text": {
    from: { width: 0 },
    to: { width: "100%" }
  },
  "@keyframes blink-cursor": {
    "from, to": { borderColor: "rgb(210, 210, 210)" },
    "50%": { borderColor: "transparent" }
  }
}));

const Home = ({title, details, id}) => {
  const classes = useStyles();
  return (
    <div className={classes.fullScreen} id={id}>
      <section className={classes.home}>
        <Typography className={classes.typedFirst} variant="h1">
          {title}
        </Typography>
        <Typography className={`${classes.typedSecond}`} variant="h2">
          {details}
        </Typography>
      </section>
    </div>
  )
}

export default Home