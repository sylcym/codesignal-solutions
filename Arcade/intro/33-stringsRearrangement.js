function stringsRearrangement(inputArray) {
  return inputArray.some((value, index) =>
    subPosition(
      [value],
      inputArray.filter((_, el) => el !== index),
    ),
  );
}

function subPosition(a, b) {
  return (
    !b.length ||
    b.some(
      (value, index) =>
        position(a[0], value) &&
        subPosition(
          [value, ...a],
          b.filter((_, el) => el !== index),
        ),
    )
  );
}

function position(a, b) {
  return (
    [...a].reduce((acc, value, index) => acc + (value !== b[index]), 0) === 1
  );
}
