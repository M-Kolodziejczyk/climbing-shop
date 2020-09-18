import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import CheckoutPageComponent from "./components/CheckoutPageComponent";
import useCheckBasketPrice from "../../customHooks/useCheckBasketPrice";
import HeaderContainer from "../../common/containers/HeaderContainer";
import Navbar from "../../common/components/Navbar";
import Footer from "../../common/components/Footer";
import Spinner from "../../common/components/Spinner";

const CheckoutPageContainer = () => {
  let location = useLocation();
  let history = useHistory();
  const user = useSelector(state => state.auth.user);
  const orderSuccess = useSelector(state => state.product.orderSuccess);
  const orderLoading = useSelector(state => state.product.orderLoading);
  const userLoading = useSelector(state => state.product.userLoading);
  const basketLoading = useSelector(state => state.product.basketLoading);
  const basket = location.state;

  if (!location.state) {
    history.goBack();
  }
  const values = useCheckBasketPrice(basket, user.email);

  useEffect(() => {
    if (orderSuccess && !orderLoading && !userLoading && !basketLoading) {
      history.push("/");
    }
  }, [orderSuccess, orderLoading, userLoading, basketLoading]);

  return (
    <Fragment>
      <HeaderContainer />
      {(orderLoading || userLoading || basketLoading) && <Spinner />}
      <Navbar />
      {location.state && Object.keys(values).length > 0 ? (
        <CheckoutPageComponent basket={values} user={user} />
      ) : (
        <div className="beforeFooterHigh">
          <Spinner />
        </div>
      )}
      <Footer />
    </Fragment>
  );
};

export default CheckoutPageContainer;
