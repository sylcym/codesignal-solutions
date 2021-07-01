function createAnagram(s, t) {
  let position = 0 ;
  s = [...s];
  
     for(let i = 0; i < t.length; i++){
        position = s.indexOf(t[i]);

         if(position >=0)  s.splice(position,1)
     }

     return s.length;
    }