import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Spinner from "../../../common/components/Spinner";

import {
  Avatar,
  Box,
  Button,
  TextField,
  Link,
  Grid,
  Container,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#f32836"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: "10px 0",
    backgroundColor: "#f32836",
    "&:hover": {
      backgroundColor: "#e40606"
    }
  },
  googleBtn: {
    marginBottom: "10px",
    backgroundColor: "#4285f4",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#007bff"
    }
  },
  googleIcon: {
    // backgroundColor: "#ffffff",
    marginRight: "10px"
  }
}));

const SignInPageComponent = props => {
  const handleChange = e => {
    props.onChange(e);
  };
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className="beforeFooter">
      {props.loading && <Spinner />}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
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
            onChange={handleChange}
            value={props.formData.firstName}
          />
          <TextField
            error={props.errors.password ? true : false}
            helperText={"" || props.errors.password}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            value={props.formData.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            className={classes.googleBtn}
            fullWidth
            onClick={props.googleLogin}
          >
            <i className={`fab fa-google ${classes.googleIcon}`}></i>
            Sign in with Google
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          {props.authError && (
            <Grid container>
              <Box mt={2}>
                <Typography component="p" variant="subtitle2" color="error">
                  {props.authError.message}
                </Typography>
              </Box>
            </Grid>
          )}
        </form>
      </div>
    </Container>
  );
};

export default SignInPageComponent;
