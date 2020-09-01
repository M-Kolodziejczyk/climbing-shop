const validate = values => {
  let errors = {};

  if (!values.features) {
    errors.features = "Features is required";
  } else if (values.features.length > 200) {
    errors.features = "Max length is 200 words";
  }
  return errors;
};
export default validate;
