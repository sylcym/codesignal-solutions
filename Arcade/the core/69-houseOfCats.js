function houseOfCats(legs) {
  let max =[];
  for(let i =((legs % 4)/2); i <= (legs /2);i+=2) {
    max.push(i);
  }
  return max
}
