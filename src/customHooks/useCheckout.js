import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import validate from "../validators/AddressCheckoutValidationRules";

const useCheckout = (user, basket, totalPrice) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const data = {
        id: "123",
        date: new Date(),
        userId: user.sub,
        basket: basket,
        address: values,
        email: user.email,
        totalPrice: totalPrice,
        status: "new"
      };

      console.log("send Data");
      // dispatch(callback(values));
      // setValues(initialState);
    }
    // eslint-disable-next-line
  }, [errors]);

  const handleChange = e => {
    if (e.target) {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value
      });
    } else {
      setValues(e);
    }
  };

  const handleAddressSubmit = e => {
    setErrors(validate(values));
  };

  const handleSubmit = e => {
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return {
    handleAddressSubmit,
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useCheckout;
