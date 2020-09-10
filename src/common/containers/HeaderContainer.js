import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { userLogout } from "../../state/auth/authActions";
import { getBasket } from "../../state/product/productAction";
import { useSelector, useDispatch } from "react-redux";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const [basketAmount, setBasketAmount] = useState(0);

  const signOut = () => {
    dispatch(userLogout());
  };
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  const basket = useSelector(state => state.product.basket);

  useEffect(() => {
    if (user) {
      dispatch(getBasket(user.email));
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (basket !== null && basket !== "") {
      setBasketAmount(Object.keys(basket).length);
    }
  }, [basket]);

  return (
    <Header
      user={user}
      isAuthenticated={isAuthenticated}
      signOut={signOut}
      basketAmount={basketAmount}
    />
  );
};

export default HeaderContainer;
