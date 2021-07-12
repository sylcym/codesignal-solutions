function arrayConversion(inputArray) {
  let conversion =[];
  let products = 0;
 while(inputArray.length > 1){
   conversion =[];
    for(let i = 0;i <inputArray.length ;i+=2){
        conversion.push(inputArray.slice(i, i + 2))
    }
   inputArray = conversion.map(el=>(products ? el[0]* el[1] : el[0]+el[1]));
    products =(products + 1) % 2;
 }
  return inputArray[0];
}
