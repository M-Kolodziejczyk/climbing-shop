import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textTransform: "uppercase"
  }
}));

const ForgotPasswordComponent = () => {
  const classes = useStyles();

  return (
    <Container component="main">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          HAVE YOU FORGOTTEN YOUR PASSWORD?
        </Typography>
        <Typography component="h2" variant="h5">
          If you've forgotten your password, enter your e-mail address and we'll
          send you an e-mail telling you how to recover it.
        </Typography>
        <Container maxWidth="sm">
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Retrieve password
            </Button>
          </form>
        </Container>
      </div>
    </Container>
  );
};

export default ForgotPasswordComponent;
