import React, { useEffect, Fragment } from "react";
import ProductListPageComponent from "./components/ProductListPageComponent";
import ProductItem from "./components/ProductItem";
import { getAllProduct, setLoading } from "../../state/product/productAction";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../common/components/Spinner";

const ProductListPageContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products);
  const loading = useSelector(state => state.product.loading);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getAllProduct());
    // eslint-disable-next-line
  }, []);

  return (
    <ProductListPageComponent>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {products &&
            products.length > 0 &&
            !loading &&
            products.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
        </Fragment>
      )}
    </ProductListPageComponent>
  );
};

export default ProductListPageContainer;
