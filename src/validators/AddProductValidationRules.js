const validate = values => {
  let errors = {};

  if (!values.productName) {
    errors.productName = "ProductName is required";
  } else if (values.productName.length > 50) {
    errors.productName = `Only 50 characters, currently ${values.productName.length}`;
  }
  if (!values.manufacturer) {
    errors.manufacturer = "Manufacturer is required";
  } else if (values.manufacturer.length > 30) {
    errors.manufacturer = `Only 30 characters, currently ${values.manufacturer.length}`;
  }
  if (!values.price) {
    errors.price = "Price is required";
  } else if (!/(\d+,\d{2})/.test(values.price)) {
    errors.price =
      "Incorect format, only digits separate with comma and 2 digits after comma ";
  }
  if (!values.discount) {
    errors.discount = "Discount is required";
  } else if (!/^[0-9][0-9]?$|^100$/.test(values.discount)) {
    errors.discount = "Only number between 0-100";
  }
  if (!values.description) {
    errors.description = "Description is required";
  } else if (values.description.length > 600) {
    errors.description = `Only 600 characters, currently is ${values.description.length}`;
  }
  if (!values.longDescription) {
    errors.longDescription = "Long description is required";
  }
  if (!values.quantity) {
    errors.quantity = "Quantity is required";
  } else if (!/^\d+$/.test(values.quantity)) {
    errors.quantity = "Only integer";
  }
  if (!values.category) {
    errors.category = "Category is required";
  }

  Object.keys(values.features).forEach(key => {
    if (!values.features[key]) {
      errors.features = { ...errors.features, [key]: "Features is required" };
    } else if (values.features[key].length > 100) {
      errors.features = {
        ...errors.features,
        [key]: `Only 100 characters, currently ${values.features[key].length}`
      };
    }
  });

  Object.keys(values.properties).forEach(key => {
    if (!values.properties[key].name) {
      errors.propertiesName = {
        ...errors.propertiesName,
        [key]: "Properties name is required"
      };
    } else if (values.properties[key].name.length > 30) {
      errors.propertiesName = {
        ...errors.propertiesName,
        [key]: `Only 30 characters, currently ${values.properties[key].name.length}`
      };
    }
    if (!values.properties[key].value) {
      errors.propertiesValue = {
        ...errors.propertiesValue,
        [key]: "Properties value is required"
      };
    } else if (values.properties[key].value.length > 70) {
      errors.propertiesValue = {
        ...errors.propertiesValue,
        [key]: `Only 70 characters, currenly ${values.properties[key].value.length}`
      };
    }
  });

  return errors;
};
export default validate;
