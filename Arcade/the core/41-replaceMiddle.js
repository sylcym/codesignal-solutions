function replaceMiddle(arr) {
  if(arr.length % 2 === 0) {
      return ([
          ...arr.slice(0, arr.length / 2 - 1), 
         (arr[arr.length / 2] + arr[arr.length / 2 - 1]), 
         ...arr.slice(arr.length / 2 + 1)
      ])
  };
  
  return arr;
}
