import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import RoomIcon from "@material-ui/icons/Room";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import { Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary">
      {"© "}
      <Link color="inherit" href="localhost:3000/">
        Climbing Shop
      </Link>{" "}
      {new Date().getFullYear()}{" "}
    </Typography>
  );
};

const InfoList = () => {
  return (
    <Grid container direction="row">
      <Grid item container xs={4}>
        <CallIcon color="primary" />
        <Typography>+48 123 123 123</Typography>
      </Grid>
      <Grid item container xs={4}>
        <RoomIcon color="primary" />
        <Typography>Kraków ul.Dluga 123</Typography>
      </Grid>
      <Grid item container xs={4}>
        <MailIcon color="primary" />
        <Typography>climbingshop@mail.com</Typography>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "50vh"
  },

  footer: {
    marginTop: "auto",
    backgroundColor: theme.palette.grey[200],
    padding: "20px 0"
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container className={classes.container} maxWidth="lg">
          <Grid container justify="space-between" alignItems="center">
            <Grid item sm={6}>
              <Copyright />
            </Grid>
            <Grid item sm={6}>
              <InfoList />
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}
