import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import discountPrice from "../../../helpers/discountPrice";
import DoneIcon from "@material-ui/icons/Done";
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
  container: {
    marginTop: "30px",
    marginBottom: "50px"
  },
  img: {
    minHeight: "240px",
    maxHeight: "240px",
    objectFit: "scale-down"
  },
  currentPrice: {
    color: "#f32836",
    fontWeight: "400"
  },
  oldPrice: {
    marginLeft: "15px",
    textDecoration: "line-through"
  },
  save: {
    color: "#ff0000"
  },
  formContainer: {
    marginTop: "30px"
  },
  formBtn: {
    color: "#ffffff",
    backgroundColor: "#f32836",
    "&:hover": {
      backgroundColor: "#e10d1b"
    }
  },
  longDescription: {
    borderBottom: "solid 1px #212529",
    paddingBottom: "20px"
  },
  featuresContainer: {
    marginTop: "30px"
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

const ProductItemPageComponent = ({ product }) => {
  const classes = useStyles();
  const discPrice = discountPrice(product.price, product.discount);

  return (
    <Container>
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={6}>
          <CardMedia
            className={classes.img}
            component="img"
            src={`https://climbing-shop.s3-eu-west-1.amazonaws.com/public/product-image/${product.id}/1.jpg`}
          />
        </Grid>
        <Grid item container direction="column" xs={6}>
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
          <Typography variant="body1">{product.description}</Typography>
          <form>
            <Grid container className={classes.formContainer}>
              <Grid item xs={4}>
                quantity // ToDo
              </Grid>
              <Grid item xs={8}>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.formBtn}
                >
                  Add to Cart
                </Button>
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
          <Typography variant="body1">{product.longDescription}</Typography>
        </Grid>
        <Grid container item className={classes.featuresContainer}>
          <Grid item xs={6}>
            <Typography variant="h5" gutterBottom>
              Features:
            </Typography>
            <List>
              {Object.keys(product.features).map(id => (
                <FeatureDisplay feature={product.features[id]} key={id} />
              ))}
            </List>
          </Grid>
          <Grid item xs={6}>
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
