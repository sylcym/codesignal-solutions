function newNumeralSystem(number) {
  let alf =
  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let sum = [];
      
      for (let i=0;i<Math.floor(alf.indexOf(number)/2)+1;i++) {
          sum.push(alf[i]+ ' + ' +alf[alf.indexOf(number)-i])
      }
      
      return sum
  }