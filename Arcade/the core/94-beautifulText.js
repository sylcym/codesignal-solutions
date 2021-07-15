function beautifulText(inputString, l, r) {
  for (let i = l+1 ; i < r+2 ; i++) {
    if ((inputString.length + 1) % i === 0 &&  beauti(inputString, i).every(el => el === ' ')) {
      return true;
    }
  }
  return false;
}
function  beauti(str, num) {
  let num1 = num-1;
  let array = [];
 
  while (num1 < str.length) {
    array.push(str[num1]);
    console.log(array)
    num1+= num;
    console.log(num1)
  }
  return array;
}