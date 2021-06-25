function squareDigitsSequence(a0) {
  let sum = a0;
  let tabsum = [a0];
  for (let i = 1; ; i++) {
    sum = String(sum)
      .split('')
      .map((el) => el ** 2)
      .reduce((accu, el) => accu + el);
    if (tabsum.includes(sum)) return i + 1;
    else tabsum.push(sum);
  }
}
