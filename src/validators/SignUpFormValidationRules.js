const validate = values => {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "Name is required!";
  } else if (values.firstName.length < 2) {
    errors.firstName = "Name needs to be at least 2 characters";
  } else if (!/^[a-zA-Z][a-zA-Z\s]*$/.test(values.firstName)) {
    errors.firstName = "Name can be only letters";
  }

  if (!values.lastName) {
    errors.lastName = "Name is required!";
  } else if (values.lastName.length < 2) {
    errors.lastName = "Name needs to be at least 2 characters";
  } else if (!/^[a-zA-Z][a-zA-Z\s]*$/.test(values.lastName)) {
    errors.lastName = "Name can be only letters";
  }

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
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
export default validate;
