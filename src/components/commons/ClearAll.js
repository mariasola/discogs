import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background: "#e82d47",
    "&:hover": {
      background: "#E81431"
    }
  },
  input: {
    display: "none"
  }
}));

export default function ClearAll(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={props.clearAll}
      >
        Clear All
      </Button>
    </div>
  );
}