function makeArrayConsecutive2(statues) {
  let min = Math.min(...statues);
  let max = Math.max(...statues);
  let newStatues = [];

  for (let i = min; i <= max; i++) {
    newStatues.push(i);
  }
  
  return newStatues.length - statues.length;
}
