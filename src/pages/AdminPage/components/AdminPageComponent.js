import React, { useState, useEffect, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeaderContainer from "../../../common/containers/HeaderContainer";
import Footer from "../../../common/components/Footer";
import Navbar from "../../../common/components/Navbar";
import AdmnPageDetails from "./AdmnPageDetails";
import {
  Box,
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
  form: {}
}));

const AdminPageComponent = props => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);
  if (user) {
  }

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <HeaderContainer />
      <Navbar />
      <Container component="main">
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
              </Tabs>
            </Grid>
            <Grid item xs={10}>
              <TabPanel value={value} index={0}>
                <Typography variant="h4">My account</Typography>
                <List>
                  {user && (
                    <Fragment>
                      <AdmnPageDetails
                        userData={user["custom:firstName"]}
                        labelName={"First Name"}
                      />
                      <AdmnPageDetails
                        userData={user["custom:firstName"]}
                        labelName={"First Name"}
                      />
                    </Fragment>
                  )}
                </List>
              </TabPanel>
              <TabPanel value={value} index={1}>
                MY Address
              </TabPanel>
              <TabPanel value={value} index={2}>
                My Cart
              </TabPanel>
              <TabPanel value={value} index={3}>
                something
              </TabPanel>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default AdminPageComponent;
