function sudoku(grid) {
  return checkRow(grid) && checkColumn(grid) && checkGrid(grid);
}

function checkRow(grid) {
  return grid
    .map((subGrid) => subGrid.filter((el, i) => subGrid.indexOf(el) === i))
    .every((el) => el.length === 9);
}

function checkColumn(grid) {
  let array = [];
  for (let i = 0; i < grid.length; i++) {
    array.push([]);
    for (let j = 0; j < grid.length; j++) {
      array[i].push(grid[j][i]);
    }
  }
  return checkRow(array);
}

function checkGrid(grid) {
  for (let i = 0; i < grid.length; i += 3) {
    for (let j = 0; j < grid.length; j += 3) {
      let array = [];
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          array.push(grid[k][l]);
        }
      }
      if (new Set(array).size !== 9) return false;
    }
  }
  return true;
}
