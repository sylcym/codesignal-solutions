function increaseNumberRoundness(n) {
  let round = n + '';
  for (let i = 1; i < round.length - 1; i++) {
    if (round[i] === '0' && round[i + 1] !== '0') return true;
  }
  return false;
}
