function arrayMaximalAdjacentDifference(inputArray) {
  let max = Math.abs(inputArray[1]-inputArray[0]);
   
   for (let i = 2; i<inputArray.length;i++){
     let diff = Math.abs(inputArray[i] - inputArray[i-1])
     
     if( diff > max){ 
       max = diff;
     }
   }
   
   return max
 }