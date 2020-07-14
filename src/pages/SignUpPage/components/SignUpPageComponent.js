import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Spinner from "../../../common/components/Spinner";
import {
  Avatar,
  Button,
  Box,
  TextField,
  Link,
  Grid,
  Typography,
  Container
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
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignUp = props => {
  const handleChange = e => {
    props.onChange(e);
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      {props.loading && <Spinner />}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={props.onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={props.errors.firstName ? true : false}
                helperText={"" || props.errors.firstName}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleChange}
                value={props.formData.firstName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={props.errors.lastName ? true : false}
                helperText={"" || props.errors.lastName}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={props.onChange}
                value={props.formData.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={props.errors.email ? true : false}
                helperText={"" || props.errors.email}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={props.onChange}
                value={props.formData.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={props.errors.password ? true : false}
                helperText={"" || props.errors.password}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={props.onChange}
                value={props.formData.password}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={props.errors.password2 ? true : false}
                helperText={"" || props.errors.password2}
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Confirm password"
                type="password"
                id="password2"
                autoComplete="current-password"
                onChange={props.onChange}
                value={props.formData.password2}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
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

export default SignUp;
