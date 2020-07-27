import React, { Fragment, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import useForm from "../../../customHooks/useForm";
import { updateAddress } from "../../../state/auth/authActions";
import validate from "../../../validators/AddressValidationRules";
import {
  List,
  Grid,
  Typography,
  TextField,
  Button,
  ListItem,
  ListItemText
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  editBtn: {
    marginRight: "15px"
  },
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
  },
  listItemTypography: {
    fontSize: "20px"
  },
  listItem: {
    paddingTop: "0px",
    paddingBottom: "0px"
  },
  formContainer: {
    marginTop: "50px"
  }
}));

const UserAddressComponent = props => {
  const classes = useStyles();
  const formRef = useRef(null);

  const initialState = {
    "custom:firstName": props.user["custom:firstName"] || "",
    "custom:lastName": props.user["custom:lastName"] || "",
    "custom:phone": props.user["custom:phone"] || "",
    "custom:address": props.user["custom:address"] || "",
    "custom:zipCode": props.user["custom:zipCode"] || "",
    "custom:city": props.user["custom:city"] || ""
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    initialState,
    validate,
    updateAddress
  );

  const toggleForm = e => {
    if (formRef.current.hidden) {
      formRef.current.removeAttribute("hidden");
    } else {
      formRef.current.setAttribute("hidden", true);
    }
  };

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={6}>
          <List>
            <ListItem className={classes.listItem}>
              <Grid item xs={12}>
                <Typography className={classes.listItemTypography}>
                  {props.user["custom:firstName"]}{" "}
                  {props.user["custom:lastName"]}
                </Typography>
              </Grid>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Grid item xs={12}>
                <Typography className={classes.listItemTypography}>
                  {"" || props.user["custom:address"]}
                </Typography>
              </Grid>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Grid item xs={12}>
                <Typography className={classes.listItemTypography}>
                  {"" || props.user["custom:zipCode"]}{" "}
                  {"" || props.user["custom:city"]}
                </Typography>
              </Grid>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Grid item xs={12}>
                <Typography className={classes.listItemTypography}>
                  {"" || props.user["custom:phone"]}
                </Typography>
              </Grid>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={toggleForm}>
            <EditIcon className={classes.editBtn} />
            <ListItemText>Edit</ListItemText>
          </Button>
        </Grid>
      </Grid>
      <form noValidate onSubmit={handleSubmit} ref={formRef} hidden={true}>
        <Grid container spacing={5} className={classes.formContainer}>
          <Grid item xs={6}>
            <TextField
              name="custom:firstName"
              value={values["custom:firstName"]}
              error={errors["custom:firstName"] ? true : false}
              helperText={"" || errors["custom:firstName"]}
              onChange={handleChange}
              variant="outlined"
              required
              id="firstName"
              label="First Name"
              autoFocus
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="custom:address"
              value={values["custom:address"]}
              error={errors["custom:address"] ? true : false}
              helperText={"" || errors["custom:address"]}
              onChange={handleChange}
              variant="outlined"
              required
              id="address"
              label="Address"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="custom:lastName"
              value={values["custom:lastName"]}
              error={errors["custom:lastName"] ? true : false}
              helperText={"" || errors["custom:lastName"]}
              onChange={handleChange}
              variant="outlined"
              required
              id="lastName"
              label="Last Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="custom:zipCode"
              value={values["custom:zipCode"]}
              error={errors["custom:zipCode"] ? true : false}
              helperText={"" || errors["custom:zipCode"]}
              onChange={handleChange}
              variant="outlined"
              required
              id="zipCode"
              label="Zip Code"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="custom:phone"
              value={values["custom:phone"]}
              error={errors["custom:phone"] ? true : false}
              helperText={"" || errors["custom:phone"]}
              onChange={handleChange}
              variant="outlined"
              required
              id="phone"
              label="Phone"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="custom:city"
              value={values["custom:city"]}
              error={errors["custom:city"] ? true : false}
              helperText={"" || errors["custom:city"]}
              onChange={handleChange}
              variant="outlined"
              required
              id="city"
              label="City"
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default UserAddressComponent;
