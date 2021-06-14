function phoneCall(min1, min2_10, min11, s) {
  if(s=== min1) return 1;
  if (s < min1) return 0;
      s-= min1;
  if(s <  min2_10 * 9){
      s -= min1;
      return Math.floor(s /min2_10)+1;
      s-= min1;
  }

       s -= min2_10 * 9;
      return Math.floor(s/ min11) + 10;
}