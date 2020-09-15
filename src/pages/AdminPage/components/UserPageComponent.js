import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import HeaderContainer from "../../../common/containers/HeaderContainer";
import Footer from "../../../common/components/Footer";
import Navbar from "../../../common/components/Navbar";
import UserPageDetails from "./UserPageDetails";
import PasswordComponent from "./PasswordComponent";
import UserAddressComponent from "./UserAddressComponent";
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
    borderRight: `1px solid ${theme.palette.divider}`
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
            <Grid item xs={2}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
              >
                <Tab label="My Account" {...a11yProps(0)} />
                <Tab label="My address" {...a11yProps(1)} />
                <Tab label="Cart" {...a11yProps(2)} />
                <Tab label="Shopping history" {...a11yProps(3)} />
                {props.userGroups.includes("AdminGroup") && (
                  <Tab label="Products" {...a11yProps(4)} />
                )}
              </Tabs>
            </Grid>
            {props.loading ? (
              <Spinner />
            ) : (
              <Grid item xs={10}>
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
                  <Typography variant="h4">My address</Typography>
                  <UserAddressComponent user={props.user} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  My Cart
                </TabPanel>
                <TabPanel value={value} index={3}>
                  something
                </TabPanel>
                {props.userGroups.includes("AdminGroup") && (
                  <TabPanel value={value} index={4}>
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
