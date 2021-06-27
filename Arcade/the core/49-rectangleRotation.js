function rectangleRotation(a, b) {
  let num1 = a / 2 ** 0.5;
  let num2 = b / 2 ** 0.5;
  let points =
    Math.floor(num1) * Math.floor(num2) + Math.ceil(num1) * Math.ceil(num2);

  if (Math.floor(num1) % 2 !== Math.floor(num2) % 2) points -= 1;

  return points;
}
