function pairOfShoes(shoes) {
  while (shoes.length) {
     let currentShoe = shoes.pop();
         
     let pair = shoes.findIndex(el => el[1] === currentShoe[1] && el[0] !== currentShoe[0])
 
     if (pair >= 0) shoes.splice(pair, 1)
     if (pair < 0) return false;
   }
 
   return true;
 }