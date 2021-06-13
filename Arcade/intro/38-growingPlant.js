function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let count = 0;
  let difference = 0;
  for (let i = 0; i < desiredHeight; i++) {
    count++;
    difference += upSpeed;

    if (difference >= desiredHeight) {
      return count;
    } else {
      difference -= downSpeed;
    }
  }
}
