function mostFrequentDigitSum(n) {
  let count = 0;
  let mostFrequent = 0;
  let maxCount = -Infinity;
  let arr = [];

  while (n > 0) {
    let sumDigit = String(n)
      .split('')
      .map(Number)
      .reduce((a, b) => a + b, 0);
    arr.push([n]);
    n = n - sumDigit;
  }

  arr = arr
    .map((el) =>
      String(el)
        .split('')
        .reduce((a, b) => a + +b, 0),
    )
    .sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    count++;

    if (arr[i] !== arr[i + 1]) {
      count = 1;
    }

    if (count > maxCount) {
      maxCount = count;
      mostFrequent = arr[i];
    }
  }

  return arr.length === 2 ? Math.max(...arr) : mostFrequent;
}
