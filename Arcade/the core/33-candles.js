function candles(candlesNumber, makeNew) {
  let total =0;
  let rest =0;
  
  while(candlesNumber>=makeNew){
      rest = Math.floor(candlesNumber / makeNew);
      total += rest * makeNew;
      candlesNumber = rest + (candlesNumber % makeNew);
  }
  
total+= candlesNumber;

return total;
}