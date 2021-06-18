function secondRightmostZeroBit(n) {
  return (
    2 **
    (n.toString(2).length -
      n.toString(2).lastIndexOf('0', n.toString(2).lastIndexOf('0') - 1) -
      1)
  );
}
