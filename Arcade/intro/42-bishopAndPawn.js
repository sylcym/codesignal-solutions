function bishopAndPawn(bishop, pawn) {
  let bishopCoords = bishop.split(''),
    pawnCoords = pawn.split('');

  bishopCoords[0] = 1 + bishopCoords[0].charCodeAt(0) - 'a'.charCodeAt(0);
  pawnCoords[0] = 1 + pawnCoords[0].charCodeAt(0) - 'a'.charCodeAt(0);

  return (
    Math.abs(bishopCoords[0] - pawnCoords[0]) ===
    Math.abs(bishopCoords[1] - pawnCoords[1])
  );
}
