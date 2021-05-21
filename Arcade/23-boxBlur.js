function boxBlur(image) {
  let newImage = image.slice(2).map((el) => el.slice(2));

  for (let i = 1; i < image.length - 1; i++) {
    for (let j = 1; j < image[i].length - 1; j++) {
      newImage[i - 1][j - 1] = Math.floor(
        getAdjacentEl([i, j]).reduce(
          (sum, el) => sum + image[el[0]][el[1]],
          0,
        ) / 9,
      );
    }
  }

  return newImage;
}

function getAdjacentEl([i, j]) {
  return [
    [i, j],
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1],
  ];
}
