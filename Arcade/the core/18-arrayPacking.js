function arrayPacking(a) {
  return a.reduce((accum, byte, index) => accum + byte * Math.pow(256, index));
}
