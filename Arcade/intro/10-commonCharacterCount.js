function commonCharacterCount(s1, s2) {
  s1 = [...s1];
  s2 = [...s2];
  let count = 0;

  s1.forEach((el) => {
    if (s2.includes(el)) {
      s2.splice(s2.indexOf(el), 1);
      count++;
    }
  });
  return count;
}
