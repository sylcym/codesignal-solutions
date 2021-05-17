function addBorder(picture) {
  let str = '';
  let arrLength = picture[0].length + 2;

  for (let i = 0; i < picture.length; i++) picture[i] = '*' + picture[i] + '*';

  return ['*'.repeat(arrLength), ...picture, '*'.repeat(arrLength)];
}
