function rangeBitCount(a, b) {
  let sum =0;
   for(let i = a; i <= b;i++){
     sum+= i.toString(2).replace(/0/g,'').length;
     }
   return sum
 }