function isSmooth(arr) {
  let mid = 0;
  if (arr.length % 2 === 0) 
        mid = arr[arr.length /2] + arr[(arr.length / 2) - 1];
  else  mid = arr[Math.floor(arr.length / 2)];
  
  return mid === arr[0] && arr[0] === arr[arr.length - 1];
}