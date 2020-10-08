import React, { useEffect, useState } from "react";
import UserPageComponent from "./components/UserPageComponent";
import { useSelector, useDispatch } from "react-redux";
import { getUser, getOrders } from "../../state/product/productAction";

const UserPageContainer = () => {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState({});
  const user = useSelector(state => state.auth.user);
  const userGroups = useSelector(state => state.auth.userGroups);
  const loading = useSelector(state => state.auth.loading);
  const productUser = useSelector(state => state.product.user);
  const productOrders = useSelector(state => state.product.orders);

  useEffect(() => {
    dispatch(getUser(user.sub));

    // eslint-disable-next-line
  }, [user]);

  useEffect(() => {
    if (Object.keys(productUser).length > 0) {
      dispatch(getOrders(productUser.orders));
    }

    // eslint-disable-next-line
  }, [productUser]);

  useEffect(() => {
    if (Object.keys(productUser).length > 0) {
      if (productUser.orders.length === Object.keys(productOrders).length) {
        setOrders(productOrders);
      }
    }

    // eslint-disable-next-line
  }, [productOrders]);

  return (
    <UserPageComponent
      user={user}
      loading={loading}
      userGroups={userGroups}
      orders={orders}
    />
  );
};

export default UserPageContainer;
