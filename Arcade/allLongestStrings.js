function allLongestStrings(inputArray) {
  let max = inputArray[0].length;
  let newArray =[];
  
  for(let i = 0 ; i < inputArray.length; i++){
      if(inputArray[i].length > max) {
          max = inputArray[i].length
      }
  }
  
  newArray= inputArray.filter(el => el.length === max)
  
  return newArray
}