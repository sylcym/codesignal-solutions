function countBlackCells(n, m) {
  let gcd =(a, b)=> b == 0? a: gcd(b,a % b);
      if(n ===1 || m=== 1) return  n * m;

      else if(n=== m) return n+(n-1)* 2

       else  return n + m - gcd(n, m) + (gcd(n, m) - 1) * 2;

}