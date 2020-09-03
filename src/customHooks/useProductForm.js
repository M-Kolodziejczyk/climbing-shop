import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProductImage } from "../state/product/productAction";

const useProductForm = (initialState, validate, callback) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      dispatch(callback(values));
      if (image) {
        dispatch(addProductImage(values.id, image));
        setImage(null);
      }
      setValues(initialState);
    }
    // eslint-disable-next-line
  }, [errors]);

  const handleChange = e => {
    if (e.name === "features") {
      setValues({
        ...values,
        features: {
          ...values.features,
          [e.value + 1]: ""
        }
      });
    } else if (e.name === "featureDelete") {
      delete values.features[e.value];
    } else if (e.name === "properties") {
      setValues({
        ...values,
        properties: {
          ...values.properties,
          [e.value + 1]: {
            name: "",
            value: ""
          }
        }
      });
    } else if (e.name === "propertiesDelete") {
      delete values.properties[e.value];
    } else if (e.target.name === "features") {
      const { name, value, id } = e.target;
      setValues({
        ...values,
        [name]: {
          ...values[name],
          [id]: value
        }
      });
    } else if (e.target.name === "propertiesName") {
      const { value, id } = e.target;
      setValues({
        ...values,
        properties: {
          ...values["properties"],
          [id]: {
            ...values.properties[id],
            name: value
          }
        }
      });
    } else if (e.target.name === "propertiesValue") {
      const { value, id } = e.target;
      setValues({
        ...values,
        properties: {
          ...values["properties"],
          [id]: {
            ...values.properties[id],
            value: value
          }
        }
      });
    } else {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value
      });
    }
  };

  const handleImage = e => {
    setImage(e);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
  };

  return {
    handleChange,
    handleSubmit,
    handleImage,
    values,
    errors
  };
};

export default useProductForm;
