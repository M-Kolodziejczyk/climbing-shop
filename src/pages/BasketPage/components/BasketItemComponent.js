import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import { Grid, Typography, CardMedia, IconButton } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    borderBottom: "1px solid #e6e6e6",
    paddingBottom: "10px",
    position: "relative"
  },
  img: {
    minHeight: "120px",
    maxHeight: "80px",
    objectFit: "scale-down"
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  },
  productName: {
    color: "#212529",
    fontSize: "18px"
  },
  manufacturer: {
    color: "#212529",
    fontSize: "20px",
    fontWeight: "500"
  },
  price: {
    color: "#f32836",
    fontSize: "18px",
    fontWeight: "600"
  },
  oldPrice: {
    textDecoration: "line-through",
    fontWeight: "500"
  },
  total: {
    fontSize: "18px",
    fontWeight: "600"
  },
  deleteBtn: {
    position: "absolute",
    top: "20",
    right: "0",
    color: "#212529"
  },
  fieldset: {
    display: "flex"
  },
  control: {
    border: "1px solid #dadada",
    display: "flex",
    maxWidth: "120px",
    position: "relative",
    marginRight: "20px"
  },
  controlInput: {
    outline: "none",
    fontSize: "30px",
    border: "none",
    width: "100%",
    textAlign: "center",
    padding: "0 24px 0  0",
    height: "58px",
    color: "#212529"
  },
  more: {
    padding: "2px 0",
    position: "absolute",
    top: "0",
    right: "0",
    borderLeft: "1px solid #dadada"
  },
  less: {
    padding: "2px 0",
    position: "absolute",
    bottom: "0",
    right: "0",
    borderLeft: "1px solid #dadada",
    borderTop: "1px solid #dadada"
  },
  formBtn: {
    width: "100%",
    color: "#ffffff",
    backgroundColor: "#f32836",
    "&:hover": {
      backgroundColor: "#e10d1b"
    }
  }
}));

const BasketItemComponent = () => {
  const classes = useStyles();
  const [amount, setAmount] = useState(0);

  const handleClickMore = () => {
    // amountChange(amount + 1);
  };

  const handleClickLess = () => {
    // amountChange(amount - 1);
  };

  const handleChange = e => {
    handleChange(parseInt(e.target.value));
  };

  return (
    <Grid
      item
      container
      xs={12}
      spacing={2}
      className={classes.container}
      alignItems="center"
    >
      <Grid item xs={2}>
        <Link to="/">
          <CardMedia
            className={classes.img}
            component="img"
            src={`https://climbing-shop.s3-eu-west-1.amazonaws.com/public/product-image/676326cd-4fec-44bf-af63-65db37d611ce/1.jpg`}
          />
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link to="/" className={classes.link}>
          <Typography className={classes.manufacturer}>Black Diamon</Typography>
          <Typography className={classes.productName}>
            Climbing backpack
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={2}>
        <Typography className={classes.price}>855,00zł</Typography>
        <Typography className={classes.oldPrice}>900,00zł</Typography>
      </Grid>
      <Grid item xs={2}>
        <div className={classes.control}>
          <input
            type="number"
            className={classes.controlInput}
            value={amount}
            name="amount"
            onChange={handleChange}
          />
          <div className={classes.more} onClick={handleClickMore}>
            <ExpandLessIcon />
          </div>
          <div className={classes.less} onClick={handleClickLess}>
            <ExpandMoreIcon />
          </div>
        </div>
      </Grid>
      <Grid item xs={2}>
        <Typography className={classes.total}>1200 zl</Typography>
      </Grid>
      <IconButton aria-label="delete" className={classes.deleteBtn}>
        <DeleteIcon />
      </IconButton>
    </Grid>
  );
};

export default BasketItemComponent;
