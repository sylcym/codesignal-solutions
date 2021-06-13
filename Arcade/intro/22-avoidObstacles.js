function avoidObstacles(inputArray) {
  let max = Math.max(...inputArray);

for (let i = 1;i < max;i++){
let jump =inputArray.some(el=>el%i ==0);
if(!jump) return i;
}
return max +1;

}