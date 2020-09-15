const basketTotalPrice = basket => {
  let total = 0;

  Object.keys(basket).forEach(key => {
    const price = parseFloat(
      parseInt(basket[key].price) +
        "." +
        basket[key].price[basket[key].price.length - 2] +
        basket[key].price[basket[key].price.length - 1]
    );

    total += parseFloat(
      (
        (price * (1 - basket[key].discount / 100)).toFixed(2) *
        basket[key].amount
      ).toFixed(2)
    );
  });

  return JSON.stringify(total.toFixed(2))
    .replace(/\./g, ",")
    .replace(/"/g, "");
};

export default basketTotalPrice;
