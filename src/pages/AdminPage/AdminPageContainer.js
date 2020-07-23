import React from "react";
import AdminPageComponent from "./components/AdminPageComponent";
import { useSelector } from "react-redux";

const AdminPageContainer = () => {
  const user = useSelector(state => state.auth.user);
  const loading = useSelector(state => state.auth.loading);

  return <AdminPageComponent user={user} loading={loading} />;
};

export default AdminPageContainer;
