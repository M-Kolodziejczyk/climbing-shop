import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: "160px",
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
    textTransform: "uppercase",
    backgroundColor: "#f32836",
    "&:hover": {
      backgroundColor: "#e40606"
    }
  }
}));

const ForgotPasswordComponent = props => {
  const classes = useStyles();

  return (
    <Container component="main" className="beforeFooter">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          HAVE YOU FORGOTTEN YOUR PASSWORD?
        </Typography>
        <Typography component="h2" variant="h5" align="center">
          If you've forgotten your password, enter your e-mail address and we'll
          send you an e-mail telling you how to recover it.
        </Typography>
        <Container maxWidth="sm">
          <form className={classes.form} noValidate onSubmit={props.onSubmit}>
            <TextField
              error={props.errors.email ? true : false}
              helperText={"" || props.errors.email}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={props.onChange}
              value={props.formData.email}
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
