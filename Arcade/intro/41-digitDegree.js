let count = 0;

function digitDegree(n) {
  if (n < 10) return count;

  const digitArr = n
    .toString()
    .split('')
    .map((el) => +el);
  const sumDigit = digitArr.reduce((acc, el) => acc + el);
  count++;

  return digitDegree(sumDigit);
}
