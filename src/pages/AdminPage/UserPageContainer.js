import React from "react";
import UserPageComponent from "./components/UserPageComponent";
import { useSelector } from "react-redux";

const UserPageContainer = () => {
  const user = useSelector(state => state.auth.user);
  const loading = useSelector(state => state.auth.loading);

  return <UserPageComponent user={user} loading={loading} />;
};

export default UserPageContainer;
