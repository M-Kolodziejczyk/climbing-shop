import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    borderBottom: "1px solid #e6e6e6",
    paddingBottom: "10px",
    paddingTop: "10px",
    position: "relative",
    margin: "0px"
  }
}));

const UserOrdersComponent = ({ order }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      xs={12}
      className={classes.container}
      alignItems="center"
    >
      <Grid item xs={3}>
        <Typography>{order.id.slice(24)}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>{order.date.slice(0, 10)}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>{order.totalPrice} zł</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography>{order.status}</Typography>
      </Grid>
    </Grid>
  );
};

export default UserOrdersComponent;
