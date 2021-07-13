function arrayPreviousLess(items) {
  let arrayItems = [-1].concat(items)
  let array = [];

  for(let i = 1 ; i < arrayItems.length ;i++){
    let j = i-1;
    while(arrayItems[j]>= arrayItems[i]){
      j--;
    }
    
    array.push(arrayItems[j]);
  }
  return array;
}