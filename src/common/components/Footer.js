import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import RoomIcon from "@material-ui/icons/Room";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: "50px"
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
  },
  link: {
    fontSize: "20px",
    "&:hover": {
      textDecoration: "none"
    }
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
              <Link color="inherit" to="/" className={classes.link}>
                <Typography variant="h6" color="textSecondary">
                  {"© "}
                  Climbing Shop {new Date().getFullYear()}
                </Typography>
              </Link>
            </Grid>
            <Grid container item sm={6}>
              <Grid item container xs={4}>
                <CallIcon />
                <Typography variant="body1">+48 123 123 123</Typography>
              </Grid>
              <Grid item container xs={4}>
                <RoomIcon />
                <Typography variant="body1">Kraków ul.Dluga 123</Typography>
              </Grid>
              <Grid item container xs={4}>
                <MailIcon />
                <Typography variant="body1">climbingshop@mail.com</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}
