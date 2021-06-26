function pagesNumberingWithInk(current, numberOfDigits) {
  while(numberOfDigits >= current.toString().length){
      numberOfDigits -= current.toString().length;
      current++;
  }
  return current-1
}
