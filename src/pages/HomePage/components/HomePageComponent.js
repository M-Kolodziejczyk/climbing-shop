import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Grid } from "@material-ui/core";
import ProductItem from "./ProductItem";
import HeaderContainer from "../../../common/containers/HeaderContainer";
import Footer from "../../../common/components/Footer";
import Navbar from "../../../common/components/Navbar";
import Slider from "../../../common/components/Slider";

const useStyles = makeStyles(theme => ({
  header: {
    margin: "30px auto",
    textAlign: "center"
  }
}));

const HomePageComponent = ({ products, loading }) => {
  const classes = useStyles();

  return (
    <div>
      <HeaderContainer />
      <Navbar />
      <Slider />

      <Container maxWidth="lg" className="beforeFooter">
        <Typography variant="h2" component="h1" className={classes.header}>
          Shoes
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
    </div>
  );
};

export default HomePageComponent;
