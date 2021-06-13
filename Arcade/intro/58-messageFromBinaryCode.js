function messageFromBinaryCode(code) {
  return code.match(/[0-1]{8}/g).map(el => String.fromCharCode(parseInt(el,2))).join('');
 }
 