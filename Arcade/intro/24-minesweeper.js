function minesweeper(matrix) {
  return matrix.map((subArr, indSubArr) =>
    subArr.map(
      (el, indEl) =>
        matrix
          .slice(Math.max(0, indSubArr - 1), indSubArr + 2)
          .map((subEl) =>
            subEl
              .slice(Math.max(0, indEl - 1), indEl + 2)
              .reduce((a, b) => a + b),
          )
          .reduce((a, b) => a + b) - el,
    ),
  );
}
