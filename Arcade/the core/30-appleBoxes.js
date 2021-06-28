function appleBoxes(k) {
  let red = 0;
   let yellow = 0;
   
   for(let i = 1; i<= k; i++){
     if (i % 2 === 0) red += + (i * i)
     else yellow += i * i;
   }
     return red - yellow;
 }