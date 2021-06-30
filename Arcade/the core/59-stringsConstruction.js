function stringsConstruction(a, b) {
  let count = 0;
  while (true) {
    for (let str of a) {
      if (b.indexOf(str) < 0) {
        return count;
      }
      b = b.replace(str, '');
    }
    count++;
  }
  return count;
}
