export const EmailValidation = values => {
  let errors = {};

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  return errors;
};

export const PasswordValidation = values => {
  let errors = {};
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be more than 6 characters";
  } else if (/^[A-Z]+$/.test(values.password)) {
    errors.password = "Password needs at least one upper case letter";
  } else if (/^[a-z]$/.test(values.password)) {
    errors.password = "Password needs at least one lower case letter";
  } else if (/^[0-9]$/.test(values.password)) {
    errors.password = "Password needs at least one digit";
  }

  if (!values.password2) {
    errors.password2 = "Confirm password";
  } else if (values.password !== values.password2) {
    errors.password2 = "Passwords do not match!";
  }
  return errors;
};
