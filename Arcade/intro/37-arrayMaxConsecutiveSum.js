function arrayMaxConsecutiveSum(inputArray, k) {
  let max = inputArray.slice(0, k).reduce((a, b) => a + b);
  let num = max;

  for (let i = k; i < inputArray.length; i++) {
    num = num + inputArray[i] - inputArray[i - k];
    if (num > max) max = num;
  }

  return max;
}
