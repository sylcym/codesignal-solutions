function alphabeticShift(inputString) {
  let newInput = [];

  for (let i = 0; i < inputString.length; i++) {
    newInput.push(
      inputString[i].charCodeAt() === 122
        ? 'a'
        : String.fromCharCode(inputString[i].charCodeAt() + 1),
    );
  }

  return newInput.join('');
}
