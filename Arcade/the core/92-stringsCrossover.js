function stringsCrossover(inputArray, result) {
  let pair = 0;

  for(let i = 0; i < inputArray.length - 1;i++)
      for(let j = i+1; j < inputArray.length; j++)
          if (strPossible(inputArray[i], inputArray[j], result)) pair++
  
  return pair;
}

function strPossible(A, B, result){
  for (let i = 0; i < A.length; i++)
      if (A[i] !== result[i] && B[i] !== result[i]) return false
    
  return true;
}