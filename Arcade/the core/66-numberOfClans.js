function numberOfClans(divisors, k) {
  let arr = Array(1024).fill(0);
  let cou = 0;
  for( let i = 1; i <= k; i++){
      cou = 0;
      for ( let j = 0; j < divisors.length ;j++){
          if(i % divisors[j] ===0){
              cou = cou | (1 << j)
              }
          }
       arr[cou]=1;
      }
    return arr.reduce((a, b) => a + b);
  }
  