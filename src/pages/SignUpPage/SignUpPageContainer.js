import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignUpPageComponent from "./components/SignUpPageComponent";
import { registerUser } from "../../state/auth/authActions";

const SignUpPageContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };
  return (
    <SignUpPageComponent
      onChange={handleChange}
      formData={formData}
      onSubmit={onSubmit}
    />
  );
};
export default SignUpPageContainer;
