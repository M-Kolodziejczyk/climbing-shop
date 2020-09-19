import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import discountPrice from "../../../helpers/discountPrice";
import DoneIcon from "@material-ui/icons/Done";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Alert from "@material-ui/lab/Alert";
import {
  Grid,
  Container,
  Typography,
  Button,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  main: {
    marginBottom: "500px"
  },
  container: {
    marginTop: "30px",
    marginBottom: "16px",
    [theme.breakpoints.up("md")]: {
      marginBottom: "30px"
    }
  },
  img: {
    minHeight: "240px",
    maxHeight: "240px",
    objectFit: "scale-down"
  },
  updateProductBtn: {
    width: "50px",
    marginTop: "10px",
    marginBottom: "20px",
    padding: "0",
    backgroundColor: "#f32836",
    "&:hover": {
      backgroundColor: "#e40606"
    }
  },
  updateProductLink: {
    textDecoration: "none",
    padding: "6px 16px",
    width: "100%",
    textAlign: "center",
    color: "#ffffff",
    "&:hover": {
      textDecoration: "none",
      color: "#ffffff"
    }
  },
  currentPrice: {
    color: "#f32836",
    fontWeight: "400"
  },
  oldPrice: {
    textDecoration: "line-through",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "15px"
    }
  },
  save: {
    color: "#ff0000"
  },
  description: {
    wordBreak: "break-all"
  },
  formContainer: {
    marginTop: "30px"
  },
  longDescription: {
    borderBottom: "solid 1px #212529",
    paddingBottom: "20px"
  },
  featuresContainer: {
    marginTop: "30px"
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
  },
  alertHandler: {
    display: "block",
    height: "48px"
  },
  alert: {
    width: "100%"
  },
  longDescriptionContent: {
    wordBreak: "break-all"
  }
}));

function FeatureDisplay({ feature }) {
  return (
    <ListItem disableGutters>
      <ListItemIcon>
        <DoneIcon style={{ color: "#f32836" }} />
      </ListItemIcon>
      <ListItemText primary={feature} />
    </ListItem>
  );
}

function PropertiesDisplay({ properties }) {
  return (
    <TableRow>
      <TableCell>{properties.name}</TableCell>
      <TableCell>{properties.value}</TableCell>
    </TableRow>
  );
}

const ProductItemPageComponent = props => {
  const { product, amountChange, amount, handleSubmit, errors } = props;
  const classes = useStyles();
  const [basketError, setBasketError] = useState(errors);

  const discPrice = discountPrice(product.price, product.discount);

  useEffect(() => {
    setBasketError(errors);
    const timer = setTimeout(() => {
      setBasketError({});
    }, 5000);
    return () => clearTimeout(timer);
  }, [errors]);

  const handleClickMore = () => {
    amountChange(amount + 1);
  };

  const handleClickLess = () => {
    amountChange(amount - 1);
  };

  return (
    <Container className={classes.main}>
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12} md={6}>
          <CardMedia
            className={classes.img}
            component="img"
            src={`https://climbing-shop.s3-eu-west-1.amazonaws.com/public/product-image/${product.id}/1.jpg`}
          />
        </Grid>
        <Grid item container direction="column" xs={12} md={6}>
          {props.userGroups.includes("AdminGroup") && (
            <Button variant="contained" className={classes.updateProductBtn}>
              <Link
                to={`/product/edit/${product.id}`}
                className={classes.updateProductLink}
              >
                Edit
              </Link>
            </Button>
          )}
          <Typography variant="h4" component="h2">
            {product.productName}
          </Typography>
          <Typography variant="h5" component="h1">
            {product.manufacturer}
          </Typography>
          <Grid container direction="row" alignItems="baseline">
            {product.discount === "0" ? (
              <Grid item container xs={12}>
                <Typography className={classes.currentPrice} variant="h2">
                  {product.price} zł
                </Typography>
              </Grid>
            ) : (
              <Fragment>
                <Grid item container xs={12} alignItems="baseline">
                  <Typography variant="h2" className={classes.currentPrice}>
                    {discPrice}zł
                  </Typography>
                  <Typography variant="h4" className={classes.oldPrice}>
                    {product.price} zł
                  </Typography>
                </Grid>
                <Grid item container xs={12}>
                  <Typography variant="h6" className={classes.save}>
                    you save {product.discount}%
                  </Typography>
                </Grid>
              </Fragment>
            )}
          </Grid>
          <Typography
            variant="body1"
            align="justify"
            className={classes.description}
          >
            {product.description}
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container className={classes.formContainer} spacing={2}>
              <Grid item xs={12} className={classes.fieldset}>
                <div className={classes.control}>
                  <input
                    type="number"
                    className={classes.controlInput}
                    value={amount}
                    name="amount"
                    readOnly
                  />
                  <div className={classes.more} onClick={handleClickMore}>
                    <ExpandLessIcon />
                  </div>
                  <div className={classes.less} onClick={handleClickLess}>
                    <ExpandMoreIcon />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  className={classes.formBtn}
                  endIcon={<ShoppingBasketIcon />}
                >
                  Add to Cart
                </Button>
              </Grid>
              <Grid item xs={12}>
                {Object.keys(basketError).length > 0 ? (
                  <Alert className={classes.alert} severity="warning">
                    {basketError.basket}
                  </Alert>
                ) : (
                  <div className={classes.alertHandler}></div>
                )}
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Grid container className="">
        <Grid item xs={12} className={classes.longDescription}>
          <Typography variant="h4" gutterBottom>
            Description:
          </Typography>
          <Typography
            variant="body1"
            align="justify"
            className={classes.longDescriptionContent}
          >
            {product.longDescription}
          </Typography>
        </Grid>
        <Grid container item className={classes.featuresContainer}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Features:
            </Typography>
            <List>
              {Object.keys(product.features).map(id => (
                <FeatureDisplay feature={product.features[id]} key={id} />
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Tech:
            </Typography>
            <TableContainer>
              <Table>
                <TableBody>
                  {Object.keys(product.properties).map(id => (
                    <PropertiesDisplay
                      properties={product.properties[id]}
                      key={id}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductItemPageComponent;
