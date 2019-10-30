import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.secondary.dark,
    padding: theme.spacing(1),
    border: "2px dashed forestgreen",
    fontFamily: "Turret Road",
    color: "darkseagreen",
    fontWeight: "700"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <span className={classes.root}>
      {"This span's text looks like that of a button."}
    </span>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
