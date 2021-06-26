function comfortableNumbers(l, r) {
  let pairs = 0;
  for (let i = l; i < r; i++)
    for (
      let j = i + 1;
      j <= i + [...i.toString()].reduce((sum, el) => sum + +el, 0) && j <= r;
      j++
    )
      if (j - [...j.toString()].reduce((sum, el) => sum + +el, 0) <= i) pairs++;
  return pairs;
}
