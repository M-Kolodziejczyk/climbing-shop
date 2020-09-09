import { useState, useEffect } from "react";
import { addToBasket } from "../state/product/productAction";
import { useDispatch } from "react-redux";

const useForm = (basket, product, email) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState(basket);
  const [amount, setAmount] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const data = {
        email: email,
        basket: values
      };
      dispatch(addToBasket(data));
    }
    // eslint-disable-next-line
  }, [errors]);

  const validate = (basket, product) => {
    const keys = Object.keys(basket);
    let error = {};
    keys.forEach(n => {
      if (basket[n].productId === product.id) {
        error.basket = "Product already in basket!";
      }
    });
    return error;
  };

  const amountChange = e => {
    if (e > 0) {
      setAmount(e);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (basket === null) {
      setValues({
        0: {
          productId: product.id,
          productName: product.productName,
          manufacturer: product.manufacturer,
          price: product.price,
          discount: product.discount,
          amount: amount
        }
      });
      setErrors({});
    } else {
      const err = validate(basket, product);
      setErrors(err);
      if (Object.keys(errors).length === 0) {
        const key = Object.keys(values).length;
        setValues({
          ...values,
          [key]: {
            productId: product.id,
            productName: product.name,
            manufacturer: product.manufacturer,
            price: product.price,
            discount: product.discount,
            amount: amount
          }
        });
      }
    }

    setIsSubmitting(true);
  };

  return {
    amountChange,
    handleSubmit,
    values,
    errors,
    amount
  };
};

export default useForm;
