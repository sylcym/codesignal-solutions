function palindromeRearranging(str) {
  let newStr = str.split('');

  let el;
  let positionEl;
  let counter = 0;

  while (newStr.length) {
    el = newStr.pop();
    positionEl = newStr.indexOf(el);

    if (positionEl < 0) counter++;
    else newStr.splice(positionEl, 1);
  }

  return counter < 2;
}
