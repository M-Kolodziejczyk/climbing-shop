import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Container } from "@material-ui/core";

const WelcomePageComponent = props => {
  const [name, setName] = useState(null);

  useEffect(() => {
    setName(props.name);
  }, [props.name]);

  return (
    <Container component="main" className="beforeFooter">
      <Grid container direction="column" justify="center">
        <Box mt="150px">
          <Grid item>
            <Typography component="h1" variant="h2">
              Welcome {name && name}
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
  );
};

export default WelcomePageComponent;
