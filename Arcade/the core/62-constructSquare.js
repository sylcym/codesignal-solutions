function constructSquare(s) {
  let max = +(Array(Math.ceil(s.length /2)).fill(9).join(''));
  let min = +('1' + Array(Math.floor((s.length - 1) / 2)).fill(0) .join('') );
 
  let count = digitsCount(s);
    for (let i = max + 1; i >= min - 1; i--) {
        if (digitsCount(String(i * i)) === count) return i * i;
    }
        return -1;

  function digitsCount(str) {
    let digit = [];
    while (str.length) {
      let arrStr = str[0];
      digit.push(str.length - (str = str.replace(new RegExp(arrStr, 'g'), '')).length);
    }
    return digit.sort((a, b) => b - a).join('');
  }
}