import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket } from "../../../state/product/productAction";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import useBasket from "../../../customHooks/useBasket";
import discountPrice from "../../../helpers/discountPrice";
import totalPrice from "../../../helpers/totalPrice";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Grid,
  Typography,
  CardMedia,
  IconButton,
  Backdrop,
  CircularProgress
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    borderBottom: "1px solid #e6e6e6",
    paddingBottom: "10px",
    paddingTop: "10px",
    position: "relative",
    margin: "0px"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    backgroundColor: "rgba(0,0,0, 0.2)"
  },
  img: {
    minHeight: "100px",
    maxHeight: "100px",
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
    padding: "8px",
    fontSize: "18px",
    fontWeight: "600"
  },
  deleteBtn: {
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

const BasketItemComponent = ({ product, basket, id }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const basketLoading = useSelector(state => state.product.basketLoading);
  const classes = useStyles();
  let discPrice;

  const total = totalPrice(product.price, product.discount, product.amount);

  if (product.discount !== "0") {
    discPrice = discountPrice(product.price, product.discount);
  }

  // eslint-disable-next-line
  const { amountChange, handleSubmit, values, errors, amount } = useBasket(
    basket,
    product,
    user.email
  );

  useEffect(() => {
    amountChange(product.amount);

    //eslint-disable-next-line
  }, []);

  const handleDelete = e => {
    const data = Object.keys(basket).reduce((object, key) => {
      if (key !== id) {
        object[key] = basket[key];
      }
      return object;
    }, {});

    dispatch(removeFromBasket(user.email, data));
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
      <Backdrop className={classes.backdrop} open={basketLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid item xs={6} md={2}>
        <Link to="/">
          <CardMedia
            className={classes.img}
            component="img"
            src={`https://climbing-shop.s3-eu-west-1.amazonaws.com/public/product-image/${product.productId}/1.jpg`}
          />
        </Link>
      </Grid>
      <Grid item xs={6} md={4}>
        <Link to="/" className={classes.link}>
          <Typography className={classes.manufacturer}>
            {product.manufacturer}
          </Typography>
          <Typography className={classes.productName}>
            {product.productName}
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={6} md={2}>
        {product.discount === "0" ? (
          <Typography className={classes.price}>{product.price} zl</Typography>
        ) : (
          <Fragment>
            <Typography className={classes.price}>{discPrice} zl</Typography>
            <Typography className={classes.oldPrice}>
              {product.price} zl
            </Typography>
          </Fragment>
        )}
      </Grid>
      <Grid item xs={6} md={2}>
        <div className={classes.control}>
          <input
            type="number"
            className={classes.controlInput}
            value={amount}
            name="amount"
            readOnly
          />
          <div
            className={classes.more}
            onClick={() => amountChange(amount + 1, "basket", id)}
          >
            <ExpandLessIcon />
          </div>
          <div
            className={classes.less}
            onClick={() => amountChange(amount - 1, "basket", id)}
          >
            <ExpandMoreIcon />
          </div>
        </div>
      </Grid>
      <Grid item container xs={12} md={2} alignItems="center">
        <Grid item xs={6} md={12}>
          <IconButton
            aria-label="delete"
            className={classes.deleteBtn}
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Grid item xs={6} md={12}>
          <Typography className={classes.total}>{total} zl</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BasketItemComponent;
