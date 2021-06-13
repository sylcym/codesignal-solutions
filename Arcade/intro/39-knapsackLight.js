function knapsackLight(value1, weight1, value2, weight2, maxW) {
  let sum = 0;

  if (value1 > value2) {
    if (weight1 <= maxW) {
      sum += value1;
      maxW -= weight1;
    }
    if (weight2 <= maxW) {
      sum += value2;
      maxW -= weight2;
    }
  } else {
    if (weight2 <= maxW) {
      sum += value2;
      maxW -= weight2;
    }
    if (weight1 <= maxW) {
      sum += value1;
      maxW -= weight1;
    }
  }

  return sum;
}
