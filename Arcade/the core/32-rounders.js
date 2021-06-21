function rounders(n) {
  let numInter = (n, div) => {
    if (n <= div) {
      return n;
    }
    return numInter(Math.round(n / div) * div, div * 10);
  };
  return numInter(n, 10);
}
