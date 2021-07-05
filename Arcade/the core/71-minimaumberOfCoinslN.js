function minimaumberOfCoinslN(coins, price) {
  let minNumber = 0;
  coins.reverse();
  for(let i = 0; i < coins.length; i++){
      if(coins[i] <= price){
          minNumber += Math.floor(price /coins[i])
          price = price % coins[i];
      }
  }
  return minNumber
  }