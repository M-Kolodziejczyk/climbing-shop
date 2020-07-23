export const FirstNameValidation = values => {
  let errors = {};

  if (!values["custom:firstName"]) {
    errors["custom:firstName"] = "Name is required";
  } else if (values["custom:firstName"].length < 2) {
    errors["custom:firstName"] = "Name needs to be at least 2 characters";
  } else if (!/^[a-zA-Z][a-zA-Z\s]*$/.test(values["custom:firstName"])) {
    errors["custom:firstName"] = "Name can be only letters";
  }

  return errors;
};

export const LastNameValidation = values => {
  let errors = {};

  if (!values["custom:lastName"]) {
    errors["custom:lastName"] = "Name is required!";
  } else if (values["custom:lastName"].length < 2) {
    errors["custom:lastName"] = "Name needs to be at least 2 characters";
  } else if (!/^[a-zA-Z][a-zA-Z\s]*$/.test(values["custom:lastName"])) {
    errors["custom:lastName"] = "Name can be only letters";
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
};
