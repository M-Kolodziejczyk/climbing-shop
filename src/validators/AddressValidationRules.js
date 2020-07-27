const validate = values => {
  let errors = {};

  if (!values["custom:firstName"]) {
    errors["custom:firstName"] = "Name is required!";
  } else if (values["custom:firstName"].length < 2) {
    errors["custom:firstName"] = "Name needs to be at least 2 characters";
  } else if (!/^[a-zA-Z][a-zA-Z\s]*$/.test(values["custom:firstName"])) {
    errors["custom:firstName"] = "Name can be only letters";
  }

  if (!values["custom:lastName"]) {
    errors["custom:lastName"] = "Name is required!";
  } else if (values["custom:lastName"].length < 2) {
    errors["custom:lastName"] = "Name needs to be at least 2 characters";
  } else if (!/^[a-zA-Z][a-zA-Z\s]*$/.test(values["custom:lastName"])) {
    errors["custom:lastName"] = "Name can be only letters";
  }

  if (!values["custom:phone"]) {
    errors["custom:phone"] = "Phone is required!";
  }

  if (!values["custom:address"]) {
    errors["custom:address"] = "Address is required!";
  }

  if (!values["custom:zipCode"]) {
    errors["custom:zipCode"] = "Zip Code is required!";
  }

  if (!values["custom:city"]) {
    errors["custom:city"] = "City is required!";
  }

  return errors;
};
export default validate;
