function chessKnight(cell) {
  let x = 'abcdefgh'.indexOf(cell[0]) + 1;
  let y = +cell[1];
  let moves = [
    [-2, 1],
    [-2, -1],
    [2, 1],
    [2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  return moves.filter(
    (el) => el[0] + x > 0 && el[0] + x < 9 && el[1] + y > 0 && el[1] + y < 9,
  ).length;
}
