function isTandemRepeat(inputString) {
  let str = inputString.length;
  return (
    str % 2 === 0 &&
    inputString.substr(0, str / 2) === inputString.substr(str / 2)
  );
}
