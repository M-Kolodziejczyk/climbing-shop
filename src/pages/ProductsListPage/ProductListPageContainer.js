import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  getProductsByCategory,
  setLoading
} from "../../state/product/productAction";
import ProductItem from "./components/ProductItem";
import HeaderContainer from "../../common/containers/HeaderContainer";
import Navbar from "../../common/components/Navbar";
import Footer from "../../common/components/Footer";
import { Typography, Container, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  header: {
    margin: "30px auto",
    textAlign: "center"
  }
}));

const ProductListPageContainer = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);
  const loading = useSelector(state => state.product.loading);
  const categories = ["clothes", "shoes", "climbing", "backpacks"];
  const category = props.match.params.category;

  if (!categories.includes(category)) {
    props.history.push("/");
  }

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getProductsByCategory(category));
    // eslint-disable-next-line
  }, [category]);

  return (
    <Fragment>
      <HeaderContainer />
      <Navbar />
      <Container maxWidth="lg" className="beforeFooter">
        <Typography variant="h2" component="h1" className={classes.header}>
          {category.toUpperCase()}
        </Typography>
        <Grid container spacing={2}>
          {products &&
            products.length > 0 &&
            !loading &&
            products.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default ProductListPageContainer;
