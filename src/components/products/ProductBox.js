import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  productBox: {
    flex: "0 0 24%",
    boxShadow: "0 0 12px #aaa",
    marginBottom: "40px",
    transition: "box-shadow .3s ease-in-out",
    position: "relative",
    "&:hover": {
      boxShadow: "0 0 12px 0 rgba(0, 0, 0, 0.8)"
    }
  },

  label: {
    backgroundColor: "#f32836",
    color: "white",
    fontWeight: "700",
    padding: "7px",
    position: "absolute",
    top: "0",
    right: "0"
  },
  productManufacturer: {
    fontSize: "14px",
    margin: "10px 0",
    textTransform: "uppercase"
  },
  productName: {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "16px",
    marginBottom: "10px",
    textTransform: "uppercase",
    letterSpacing: "0"
  },
  currentPrice: {
    color: "#f32836",
    fontWeight: "500",
    fontSize: "21px"
  },
  oldPrice: {
    fontSize: "16px",
    textDecoration: "line-through"
  },
  buttonContainer: {
    padding: "0 16px 16px 16px"
  },
  button: {
    color: "white",
    backgroundColor: "#f32836"
  }
}));

const ProductBox = () => {
  const classes = useStyles();

  return (
    <Card className={classes.productBox}>
      <CardContent>
        <Typography className={classes.label}>-20%</Typography>
      </CardContent>
      <CardMedia
        component="img"
        src="https://climbing-shop.s3-eu-west-1.amazonaws.com/black_diamond_helmet.jpg"
      />
      <CardContent>
        <Typography className={classes.productManufacturer}>
          Black Diamond
        </Typography>
        <Typography className={classes.productName}>
          KASK WSPINACZKOWY BLACK DIAMOND HALF DOME - SLATE
        </Typography>
        <Grid container direction="row" alignItems="center">
          <Grid item container xs={4}>
            <Typography className={classes.currentPrice}>210 zl</Typography>
          </Grid>
          <Grid item container xs={4}>
            <Typography className={classes.oldPrice}>240zl</Typography>
          </Grid>
          <Grid item container xs={4}></Grid>
        </Grid>
      </CardContent>
      <CardActions className={classes.buttonContainer}>
        <Button className={classes.button}>BUY</Button>
      </CardActions>
    </Card>
  );
};

export default ProductBox;
