function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  if (!inputArray.some((el) => el === elemToReplace)) return inputArray;

  return inputArray
    .join(',')
    .replaceAll(elemToReplace, substitutionElem)
    .split(',')
    .map((el) => Number(el));
}
