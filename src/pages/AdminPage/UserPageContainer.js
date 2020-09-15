import React from "react";
import UserPageComponent from "./components/UserPageComponent";
import { useSelector } from "react-redux";

const UserPageContainer = () => {
  const user = useSelector(state => state.auth.user);
  const userGroups = useSelector(state => state.auth.userGroups);
  const loading = useSelector(state => state.auth.loading);

  return (
    <UserPageComponent user={user} loading={loading} userGroups={userGroups} />
  );
};

export default UserPageContainer;
