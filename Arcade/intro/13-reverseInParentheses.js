function reverseInParentheses(inputString) {
  if (inputString.includes('('))
    return reverseInParentheses(invert(inputString));

  return inputString;
}

function invert(strN) {
  let regEx = /\(([^()]*)\)/i;
  let subStr = regEx.exec(strN)[1];

  subStr = subStr.split('').reverse().join('');

  return strN.replace(regEx, subStr);
}
