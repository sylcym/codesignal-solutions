function deleteDigit(n) {
  let num = String(n).split('');
   for(let i = 0; i<num.length; i++){
     if(num[i]<num[i+1]){
       return num.splice(i,1) && +num.join('')
     }
   }
   return num.splice(num.length-1, 1) && +num.join('')
 }