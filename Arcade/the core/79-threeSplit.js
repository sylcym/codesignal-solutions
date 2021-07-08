function threeSplit(a) {
  let sum = a.reduce((sum, el) => sum + el);
  
  let [sum1, sum2, sum3, count] = [0, 0, 0, 0];
  
  for (let i = 0; i < a.length -2; i++) {
    sum1 += a[i];
    sum2 = 0;
    
    for (let j = i + 1; j < a.length-1 ; j++) {
      sum2 += a[j];
      
      if (sum1 === sum2 && sum2 === (sum - sum1 - sum2)) count++;
    }
  }
  
  return count;
}
