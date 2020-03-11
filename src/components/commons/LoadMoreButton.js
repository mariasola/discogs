import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background: "#fdab51",
    "&:hover": {
      background: "#f36c4c"
    }
  },
  input: {
    display: "none"
  }
}));

export default function LoadMoreButton(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={props.loadMore}
      >
        Load More
      </Button>
    </div>
  );
}