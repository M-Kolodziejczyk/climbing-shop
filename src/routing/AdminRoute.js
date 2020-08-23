import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ component: Component, ...rest }) => {
  const userGroups = useSelector(state => state.auth.userGroups);
  const loadingUser = useSelector(state => state.auth.loadingUser);

  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loadingUser) {
      setLoading(false);
    }

    if (userGroups.includes("AdminGroup")) {
      setIsAuth(true);
    }
  }, [userGroups, loadingUser]);

  if (loading) {
    return 0;
  } else {
    return (
      <Route
        {...rest}
        render={props =>
          !isAuth ? <Redirect to="/" /> : <Component {...props} />
        }
      />
    );
  }
};

export default AdminRoute;
