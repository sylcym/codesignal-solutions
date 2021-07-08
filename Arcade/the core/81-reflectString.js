function reflectString(inputString) {
  return inputString.split('').map(el => String.fromCharCode('z'.charCodeAt(0) - el.charCodeAt(0) + 'a'.charCodeAt(0))).join('');
 }