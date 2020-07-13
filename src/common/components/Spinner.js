import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  spinner: {
    position: "fixed",
    zIndex: "999",
    margin: "auto",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    "&::before": {
      content: '""',
      display: "block",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.3)"
    }
  }
}));

const Spinner = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.spinner}
    >
      <CircularProgress size="80px" />
    </Grid>
  );
};

export default Spinner;
