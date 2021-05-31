function sumUpNumbers(inputString) {
  let numbers = inputString.match(/\d+/g) || [0];
  return numbers.map(Number).reduce((acc, el) => acc + el);
}
