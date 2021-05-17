function checkPalindrome(inputString) {
  let newInput = inputString.split('').reverse().join('');
  return inputString === newInput;
}
