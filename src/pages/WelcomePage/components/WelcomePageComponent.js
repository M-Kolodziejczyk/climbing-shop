import React, { useState, useEffect } from "react";
import HeaderContainer from "../../../common/containers/HeaderContainer";
import Footer from "../../../common/components/Footer";
import Navbar from "../../../common/components/Navbar";
import { Box, Grid, Typography, Container } from "@material-ui/core";

const WelcomePageComponent = props => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  return (
    <div>
      <HeaderContainer />
      <Navbar />
      <Container component="main">
        <Grid container direction="column" justify="center">
          <Box mt="150px">
            <Grid item>
              <Typography component="h1" variant="h2">
                Welcome {user && user.firstName}
              </Typography>
            </Grid>
          </Box>
          <Box mt="50px">
            <Grid item>
              <Typography component="h3" variant="h5">
                You have successfully register a new account
              </Typography>
            </Grid>
            <Grid item>
              <Typography component="h5" variant="h5">
                We ve sent you an email. Please click on confirmation link to
                verify your account.
              </Typography>
            </Grid>
          </Box>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default WelcomePageComponent;
