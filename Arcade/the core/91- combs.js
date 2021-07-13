function combs(comb1, comb2) {
  let per = (comb1, comb2) => {
    while ([...comb2].some((el, ind) => el === comb1[ind] && el === '*'))
      comb2 = '.' + comb2;

    return Math.max(comb1.length, comb2.length);
  };
  
  return Math.min(per(comb1, comb2), per(comb2, comb1));
}
