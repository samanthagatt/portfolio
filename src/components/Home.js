import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  fullScreen: {
    height: "100vh",
    width: "100vw",
    minHeight: "10em",
    backgroundImage: "url('code.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  home: {
    color: "white",
    textShadow: "0 0 10px rgba(200, 200, 200, 0.4)",
    display: "inline-flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  typedFirst: {
    textAlign: "right",
    overflow: "hidden",
    borderRight: "13px solid transparent",
    whiteSpace: "nowrap",
    width: 0,
    marginBottom: "0.5em",
    animation: "$type-text 4s steps(40, end) forwards, $blink-cursor 0.75s step-end 7"
  },
  typedSecond: {
    textAlign: "right",
    overflow: "hidden",
    borderRight: "13px solid transparent",
    whiteSpace: "nowrap",
    width: 0,
    animation: "$type-text 4s steps(40, end) 5s forwards, $blink-cursor .75s step-end infinite 5s"
  },
  "@keyframes type-text": {
    from: { width: 0 },
    to: { width: "100%" }
  },
  "@keyframes blink-cursor": {
    "from, to": { borderColor: "white" },
    "50%": { borderColor: "transparent" }
  }
}));

const Home = ({title, details}) => {
  const classes = useStyles();
  return (
    <div className={classes.fullScreen}>
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