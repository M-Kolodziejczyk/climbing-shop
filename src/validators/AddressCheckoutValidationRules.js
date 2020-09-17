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

  if (!values.phone) {
    errors.phone = "Phone is required!";
  }

  if (!values.address) {
    errors.address = "Address is required!";
  }

  if (!values.zipCode) {
    errors.zipCode = "Zip Code is required!";
  }

  if (!values.city) {
    errors.city = "City is required!";
  }

  return errors;
};
export default validate;
