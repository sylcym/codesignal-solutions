function switchLights(a) {
  let count = a.reduce((b, c) => b + c);
 
     return a.map( (can) => {
          count-=can;
     return count % 2;
     })
 }