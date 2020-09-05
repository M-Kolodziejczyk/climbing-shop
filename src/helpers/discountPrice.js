const discountPrice = (price, discount) => {
  const priceDot = parseFloat(
    parseInt(price) + "." + price[price.length - 2] + price[price.length - 1]
  );

  const priceDiscount = JSON.stringify(
    (priceDot * (1 - discount / 100)).toFixed(2)
  );

  return priceDiscount.replace(/\./g, ",").replace(/"/g, "");
};

export default discountPrice;
