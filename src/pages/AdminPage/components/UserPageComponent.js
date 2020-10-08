import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import HeaderContainer from "../../../common/containers/HeaderContainer";
import Footer from "../../../common/components/Footer";
import Navbar from "../../../common/components/Navbar";
import UserPageDetails from "./UserPageDetails";
import PasswordComponent from "./PasswordComponent";
import UserAddressComponent from "./UserAddressComponent";
import UserOrdersComponent from "./UserOrdersComponent";
import Spinner from "../../../common/components/Spinner";
import { updateUser, changePassword } from "../../../state/auth/authActions";
import {
  FirstNameValidation,
  LastNameValidation,
  PasswordValidation
} from "../../../validators/AdminAccountValidationRules";
import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
  Tabs,
  Tab,
  List
} from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && <Fragment>{children}</Fragment>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    // display: "flex",
    height: 224
  },
  tabs: {
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  },
  flexContainerVertical: {
    [theme.breakpoints.down("sm")]: {
      // flexDirection: "row"
    }
  },
  vertical: {
    [theme.breakpoints.down("sm")]: {
      // flexDirection: "row"
    }
  },
  edit: {
    marginRight: "15px"
  },
  form: {},
  addProductBtn: {
    marginTop: "20px",
    backgroundColor: "#f32836",
    "&:hover": {
      backgroundColor: "#e40606"
    }
  },
  addProductLink: {
    textDecoration: "none",
    color: "#ffffff",
    "&:hover": {
      textDecoration: "none",
      color: "#ffffff"
    }
  },
  ordersHeader: {
    marginTop: "20px"
  }
}));

const UserPageComponent = props => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <HeaderContainer />
      <Navbar />
      <Container component="main" className="beforeFooter">
        <Box mt="20px">
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Tabs
                value={value}
                onChange={handleChange}
                orientation="vertical"
                variant="scrollable"
                className={classes.tabs}
                classes={{
                  flexContainerVertical: classes.flexContainerVertical,
                  vertical: classes.vertical
                }}
              >
                <Tab label="My Account" {...a11yProps(0)} />
                <Tab label="My address" {...a11yProps(1)} />
                <Tab label="Orders" {...a11yProps(2)} />
                {props.userGroups.includes("AdminGroup") && (
                  <Tab label="Products" {...a11yProps(3)} />
                )}
              </Tabs>
            </Grid>
            {props.loading ? (
              <Spinner />
            ) : (
              <Grid item xs={12} md={10}>
                <TabPanel value={value} index={0}>
                  <Typography variant="h4">My account</Typography>
                  <List>
                    {user && (
                      <Fragment>
                        <UserPageDetails
                          attributeName={"email"}
                          userData={user["email"]}
                          labelName={"Email"}
                          edit={false}
                        />
                        <UserPageDetails
                          attributeName={"custom:firstName"}
                          userData={user["custom:firstName"]}
                          labelName={"First Name"}
                          edit={true}
                          validate={FirstNameValidation}
                          callback={updateUser}
                        />
                        <UserPageDetails
                          attributeName={"custom:lastName"}
                          userData={user["custom:lastName"]}
                          labelName={"Last Name"}
                          edit={true}
                          validate={LastNameValidation}
                          callback={updateUser}
                        />
                        <PasswordComponent
                          validate={PasswordValidation}
                          callback={changePassword}
                        />
                      </Fragment>
                    )}
                  </List>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Typography variant="h4" align="center">
                    My address
                  </Typography>
                  <UserAddressComponent user={props.user} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Grid item container xs={12}>
                    <Grid item xs={12}>
                      <Typography variant="h4">Your orders:</Typography>
                    </Grid>
                    <Grid
                      item
                      container
                      xs={12}
                      className={classes.ordersHeader}
                    >
                      <Grid item xs={3}>
                        <Typography variant="h5">Order ID:</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h5">Date:</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h5">Price:</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h5">Status</Typography>
                      </Grid>
                    </Grid>
                    {Object.keys(props.orders).map((order, key) => (
                      <UserOrdersComponent
                        order={props.orders[order]}
                        key={key}
                      />
                    ))}
                  </Grid>
                </TabPanel>
                {props.userGroups.includes("AdminGroup") && (
                  <TabPanel value={value} index={3}>
                    <Typography variant="h4">Products</Typography>
                    <Button
                      variant="contained"
                      className={classes.addProductBtn}
                    >
                      <Link
                        to="/product/add"
                        className={classes.addProductLink}
                      >
                        Create new product
                      </Link>
                    </Button>
                  </TabPanel>
                )}
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default UserPageComponent;
