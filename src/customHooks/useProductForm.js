import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const useProductForm = (initialState, validate, callback) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      dispatch(callback(values));
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

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useProductForm;
