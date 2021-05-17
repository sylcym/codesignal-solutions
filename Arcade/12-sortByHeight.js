function sortByHeight(inputArray) {
  let copyArray = inputArray.slice();
  let treePosition = [];
  let i = -1;
  
  while((i = inputArray.indexOf(-1, i+1)) > -1) {
        treePosition.push(i);
  }
  let updatePosition = treePosition.slice();
  
  while(updatePosition.length){
    copyArray.splice(updatePosition.pop(), 1);
  }
  
  copyArray.sort((x, y) => x - y);
  
  while(treePosition.length){
    copyArray.splice(treePosition.shift(),0,-1);
  }

  return copyArray;
}