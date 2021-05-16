function isLucky(n) {
  n = n
    .toString()
    .split('')
    .map((el) => +el);
  let half = n.length / 2;
  let n1 = n.splice(0, half).reduce((sum, el) => sum + el, 0);
  n = n.reduce((sum, el) => sum + el, 0);

  return n === n1;
}
