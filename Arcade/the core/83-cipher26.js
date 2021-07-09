function cipher26(message) {
  let out = [];
  let sum = 0;
  let origin ;
  for (let i = 0; i < message.length; i++) {
    
    origin = (message[i].charCodeAt(0) - 'a'.charCodeAt(0) + 26 - sum) % 26;
    out.push(origin);
    sum = (sum + origin) % 26;
  }
  return out.map(el=> String.fromCharCode(el + 'a'.charCodeAt(0))).join('');
}