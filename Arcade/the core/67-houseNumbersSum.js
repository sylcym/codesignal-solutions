function houseNumbersSum(inputArray) {
  let sum = 0;

  for (let i = 0; inputArray[i] != 0; sum += inputArray[i++]);

  return sum;
}
