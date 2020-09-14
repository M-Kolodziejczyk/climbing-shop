import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Spinner from "../../../common/components/Spinner";
import {
  Avatar,
  Button,
  Box,
  TextField,
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
    backgroundColor: "#f32836"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#f32836",
    "&:hover": {
      backgroundColor: "#e40606"
    }
  }
}));

const ForgotPasswordVerificationPageComponent = props => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      {props.loading && <Spinner />}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Change Password
        </Typography>
        <form className={classes.form} noValidate onSubmit={props.onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                error={props.errors.password ? true : false}
                helperText={"" || props.errors.password}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="New Password"
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
            Change Password
          </Button>
          {props.authError && (
            <Grid container>
              <Box mt={2}>
                <Typography component="p" variant="subtitle2" color="error">
                  {props.authError}
                </Typography>
              </Box>
            </Grid>
          )}
        </form>
      </div>
    </Container>
  );
};
export default ForgotPasswordVerificationPageComponent;
