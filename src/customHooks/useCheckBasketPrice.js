import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../state/product/productAction";
import axios from "axios";
import config from "../config";

const useCheckBasketPrice = (userBasket, email) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState({});
  const [basket, setBasket] = useState(userBasket);
  const [isChange, setIsChange] = useState(false);
  const [isFinish, setIsFinish] = useState(false);

  async function FnLoop(basket) {
    const basketKeys = Object.keys(basket);

    for (const key of basketKeys) {
      const result = await axios.get(
        `${config.api.invokeUrl}/products/${basket[key].productId}/`
      );

      if (basket[key].price !== result.data.price) {
        setBasket(state => ({
          ...state,
          [key]: {
            ...state[key],
            price: result.data.price
          }
        }));
        setIsChange(true);
      }

      if (basket[key].discount !== result.data.discount) {
        setBasket(state => ({
          ...state,
          [key]: {
            ...state[key],
            price: result.data.discount
          }
        }));

        setIsChange(true);
      }
    }

    setIsFinish(true);
  }

  useEffect(() => {
    if (isFinish) {
      setProducts(basket);
    }

    if (isChange) {
      const data = {
        email: email,
        basket: basket
      };

      dispatch(addToBasket(data));
    }

    // eslint-disable-next-line
  }, [isFinish]);

  useEffect(() => {
    if (basket) {
      FnLoop(basket);
    }

    // eslint-disable-next-line
  }, [basket]);

  return products;
};

export default useCheckBasketPrice;
