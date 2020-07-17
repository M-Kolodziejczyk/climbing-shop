import React from "react";
import AdminPageComponent from "./components/AdminPageComponent";
import { useSelector } from "react-redux";

const AdminPageContainer = () => {
  const user = useSelector(state => state.auth.user);

  return <AdminPageComponent user={user} />;
};

export default AdminPageContainer;
