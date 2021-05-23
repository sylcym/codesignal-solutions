function depositProfit(deposit, rate, threshold) {
  let accum = 0;
  for (let i = 0; deposit < threshold; i++) {
    deposit += (deposit * rate) / 100;
    accum++;
  }
  return accum;
}
