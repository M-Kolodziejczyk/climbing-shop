import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const UserRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(state => state.auth.user);
  const loadingUser = useSelector(state => state.auth.loadingUser);

  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loadingUser) {
      setLoading(false);
    }

    if (user) {
      console.log(user);
      setIsAuth(true);
    }
  }, [user, loadingUser]);

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

export default UserRoute;
