function centuryFromYear(year) {
  let lastN = year % 10;
  let century = Math.trunc(year / 100);

  // if(lastN >= 1) return century+1;
  // else if(lastN ===0) return century;

  return Math.floor((year - 1) / 100) + 1;
}
