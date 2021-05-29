function lineEncoding(s) {
  let strArr = [...s];
  let output =[];
  let sum = 1;

  for (let i = 0; i < strArr.length; i++){
      if (strArr[i] === strArr[i+1]) sum++;
      else {
          if (sum === 1) output.push(strArr[i]);
          else output.push(sum + strArr[i]);
          sum = 1;
      }
  }
  
  return output.join('');
}