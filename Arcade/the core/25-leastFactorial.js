function leastFactorial(n) {
  let smallestFactorial = 1;
  let num = 1;
  
  while(smallestFactorial < n)
      smallestFactorial *= ++num;

  return smallestFactorial;
}
