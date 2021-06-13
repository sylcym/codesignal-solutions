function isIPv4Address(inputString) {
  let newStr = inputString.split('.');
  
 return (
     newStr.length === 4 &&
     newStr.every(el => (el >= 0 && el <= 255 && el.length > 0 && !isNaN(el)) && (+el[0] !== 0 || el.length === 1))
 )
}


