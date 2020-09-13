import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import {
  Container,
  Grid,
  CardMedia,
  Typography,
  TextField,
  Menu,
  MenuItem,
  Button
} from "@material-ui/core";

import Avatar from "@material-ui/core/Avatar";
const useStyles = makeStyles(theme => ({
  container: {},
  logoContainer: {
    maxHeight: "150px"
  },
  img: {
    maxWidth: "200px",
    maxHeight: "140px",
    objectFit: "scale-down"
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    color: "#212529",
    "&:hover": {
      textDecoration: "none",
      color: "#212529"
    }
  },
  accountContainer: {
    display: "flex"
  },
  accountLink: {
    color: "#212529",
    textDecoration: "none",
    "&:hover": {
      color: "#212529",
      textDecoration: "none"
    }
  },
  basketLink: {
    textDecoration: "none",
    color: "#212529",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      textDecoration: "none",
      color: "#212529"
    }
  },
  basketSpan: {
    backgroundColor: "#f32836",
    marginLeft: "5px"
  },
  userBtn: {
    backgroundColor: "#f32836",
    "&:hover": {
      backgroundColor: "#e40606",
      textDecoration: "none"
    }
  },
  userLink: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  }
}));

const Header = props => {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setUser(props.user);
    setIsAuthenticated(props.isAuthenticated);
  }, [props.user, props.isAuthenticated]);

  return (
    <Container>
      <Grid
        container
        className={classes.container}
        spacing={2}
        alignItems="center"
      >
        <Grid item xs={4} className={classes.logoContainer}>
          <Link to="/" className={classes.logoLink}>
            <CardMedia
              className={classes.img}
              component="img"
              src="https://climbing-shop.s3-eu-west-1.amazonaws.com/mountain-logo.svg"
            />
            <Typography variant="h5" component="h1">
              Climbing Shop
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <form>
            <TextField
              variant="outlined"
              label="search"
              size="small"
              fullWidth
            />
          </form>
        </Grid>
        <Grid
          item
          xs={2}
          className={classes.accountContainer}
          alignItems="center"
          justifyContent="center"
        >
          <PersonIcon fontSize="large" />
          {isAuthenticated ? (
            <div>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                variant="contained"
                className={classes.userBtn}
                color="primary"
              >
                {user["custom:firstName"]}
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>
                  <Link to="/admin" className={classes.accountLink}>
                    My account
                  </Link>
                </MenuItem>
                <MenuItem onClick={props.signOut}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Link to="/signin" type="button" className={classes.userLink}>
              <Button className={classes.userBtn} variant="contained">
                Log in
              </Button>
            </Link>
          )}
        </Grid>
        <Grid item xs={2}>
          <Link to="/user/basket" className={classes.basketLink}>
            <ShoppingCartIcon fontSize="large" />
            <Avatar className={classes.basketSpan}>{props.basketAmount}</Avatar>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
