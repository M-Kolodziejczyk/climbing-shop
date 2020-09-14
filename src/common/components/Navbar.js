import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#f2f2f2"
  },
  link: {
    color: "#343a40",
    fontSize: "20px",
    padding: "20px 10px",
    textDecoration: "none",
    "&:hover": {
      color: "#121416",
      textDecoration: "none"
    }
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <Container maxWidth={false} className={classes.container}>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between">
          <Link className={classes.link} to="/products/category/clothing">
            Clothing
          </Link>
          <Link className={classes.link} to="/products/category/shoes">
            Shoes
          </Link>
          <Link className={classes.link} to="/products/category/backpacks">
            Backpacks
          </Link>
          <Link className={classes.link} to="/products/category/climbing">
            Climbing
          </Link>
        </Grid>
      </Container>
    </Container>
  );
};

export default Navbar;
