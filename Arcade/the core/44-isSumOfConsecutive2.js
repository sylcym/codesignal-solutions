function isSumOfConsecutive2(n) {
  let count = 0;
  let sum = 0;

  for (let i = 1; i < n; i++) {
    sum = i;
    for (let j = i + 1; j < n; j++) {
      sum += j;

      if (n === sum) count++;
      else if (sum > n) break;
    }
  }

  return count;
}
