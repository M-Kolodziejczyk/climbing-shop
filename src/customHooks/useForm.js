import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const useForm = (initialState, validate, callback) => {
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
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
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

export default useForm;
