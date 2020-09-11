const discountPrice = (price, discount, amount) => {
  const pricefloat = parseFloat(
    parseInt(price) + "." + price[price.length - 2] + price[price.length - 1]
  );

  const totalPrice = JSON.stringify(
    ((pricefloat * (1 - discount / 100)).toFixed(2) * amount).toFixed(2)
  );

  return totalPrice.replace(/\./g, ",").replace(/"/g, "");
};

export default discountPrice;
