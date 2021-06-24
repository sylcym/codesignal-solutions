function makeArrayConsecutive2(statues) {
  let count = 0;
  let min = Math.min(...statues);
  let max = Math.max(...statues);
  
  for(let i = min; i<= max;i++) count++;
  
  return count - statues.length
}