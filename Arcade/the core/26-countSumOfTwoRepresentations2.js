function countSumOfTwoRepresentations2(n, l, r) {
  let count = 0;
  let a = Math.max(n - r, l);
  let b = n - a;

  while (a <= r && a <= b) {
    count += 1;
    a += 1;
    b -= 1;
  }
  return count;
}
