const validate = values => {
  let errors = {};

  if (!values.manufacturer) {
    errors.producent = "Producent is required";
  }

  if (!values.id) {
    errors.id = "ID is required";
  }

  return errors;
};
export default validate;
