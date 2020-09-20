import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    backgroundColor: "#f2f2f2",
    padding: "10px"
  },
  linkItem: {
    textAlign: "center",
    padding: "10px"
  },
  link: {
    color: "#343a40",
    fontSize: "20px",
    // padding: "20px 10px",
    textDecoration: "none",
    "&:hover": {
      color: "#000000",
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
          <Grid item xs={12} sm={3} className={classes.linkItem}>
            <Link className={classes.link} to="/products/category/clothes">
              Clothing
            </Link>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.linkItem}>
            <Link className={classes.link} to="/products/category/shoes">
              Shoes
            </Link>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.linkItem}>
            <Link className={classes.link} to="/products/category/backpacks">
              Backpacks
            </Link>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.linkItem}>
            <Link className={classes.link} to="/products/category/climbing">
              Climbing
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Navbar;
