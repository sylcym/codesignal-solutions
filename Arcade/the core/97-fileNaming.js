function fileNaming(names) {
  let array = [];
  let count = 0;
  
  for(let i = 0; i < names.length ;i++){
    let namNames = names[i];
    count = 0;
    
    if(array.indexOf(names[i])> -1){
      while(array.indexOf(names[i]) > -1){
        count++;
        names[i] = namNames +'('+count+')';
      }
    }
    array.push(names[i]);
  }
  return array
}