function tennisSet(score1, score2) {
  const [min, max] = [Math.min(score1, score2), Math.max(score1, score2)];

  return (max === 6 && min < 5) || (max === 7 && min >= 5 && min <= 6);
}
