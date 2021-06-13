function digitsProduct(product) {
  let i = 1;

  while (i < 9999) {
    let digit = String(i)
      .split('')
      .map(Number)
      .reduce((prod, el) => prod * el);
    if (product === digit) return i;
    i++;
  }

  return -1;
}
