function longestDigitsPrefixl(inputString) {
  let i = 0;
  for (; i < inputString.length; i++) {
    if (!/\d/.test(inputString[i])) break;
  }
  return inputString.substring(0, i);
}
