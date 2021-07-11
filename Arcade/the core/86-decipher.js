function decipher(cipher) {
  
  let str = cipher.split('').map(Number);
  let arr =[];
  let count = 0;
  
  for(let i = 0; i < str.length ; i++){
    count = count *10 + str[i];
    if(count >= 97 && count <= 123) {
      arr.push(String.fromCharCode(count));
      count =0;
      
    }
  }
 
 return arr.join('')
}