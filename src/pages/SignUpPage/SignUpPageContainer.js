import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignUpPageComponent from "./components/SignUpPageComponent";
import { registerUser } from "../../state/auth/authActions";
import validate from "../../validators/SignUpFormValidationRules";

const SignUpPageContainer = () => {
  const dispatch = useDispatch();
  const authError = useSelector(state => state.auth.authError);

  const initailState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: ""
  };

  const [formData, setFormData] = useState(initailState);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      dispatch(registerUser(formData));
      setFormData(initailState);
    }
    // eslint-disable-next-line
  }, [errors]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(formData));
  };
  return (
    <SignUpPageComponent
      onChange={handleChange}
      formData={formData}
      onSubmit={onSubmit}
      errors={errors}
      authError={authError}
    />
  );
};
export default SignUpPageContainer;
