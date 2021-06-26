function weakNumbers(n) {
  let range = [];
  let range2 =[];
  const  num = Array.from(Array(n), (_,i) => i + 1);

  for(let n of num){
      range.push(num.filter(el => n % el === 0).length);
      range2.push(range.filter(el => el > range[n - 1]).length);
  }
  
  let weak = Math.max(...range2);
  return [weak,range2.reduce((sum, el) => sum += +(el === weak), 0)];
}