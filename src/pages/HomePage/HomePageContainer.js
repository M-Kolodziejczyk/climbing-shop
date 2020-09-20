import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByCategory } from "../../state/product/productAction";
import HomePageComponent from "./components/HomePageComponent";

const HomePageContainer = () => {
  const [productsArray, setProductsArray] = useState();
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);
  const loading = useSelector(state => state.product.loading);
  const category = "shoes";

  useEffect(() => {
    dispatch(getProductsByCategory(category));
    // eslint-disable-next-line
  }, [category]);

  useEffect(() => {
    if (products) {
      setProductsArray([products[0], products[1], products[2], products[3]]);
    }
  }, [products]);

  return <HomePageComponent products={productsArray} loading={loading} />;
};

export default HomePageContainer;
