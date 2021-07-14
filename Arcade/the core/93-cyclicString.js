function cyclicString(s) {
  let str = s.split('');
 for(let i = 1; i < str.length ; i++){
   if(substr(str.slice(0,i),str.slice(i))) return i
 }; 
   return str.length


function substr(sub,cyclic){
 for(let i = 0;i < cyclic.length ;i++){
   if(cyclic[i] !== sub[i % sub.length])return false
 }
 return true;
} 
}

