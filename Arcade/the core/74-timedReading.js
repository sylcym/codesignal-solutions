function timedReading(maxLength, text) {
  let num = text.match(/[A-Za-z]+/g) ;
  
  return num ? num.filter(el => el.length <= maxLength).length : 0;
}