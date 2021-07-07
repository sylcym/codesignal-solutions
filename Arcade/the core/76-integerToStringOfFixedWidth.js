function integerToStringOfFixedWidth(number, width) {
  let num = "0".repeat(width) + number;
   return num.substring(num.length-width);

}