function alphanumericLess(s1, s2) {
  str1 = s1.replace(/[0-9]+/g, el => el.padStart(20, 0))
     str2 = s2.replace(/[0-9]+/g, el => el.padStart(20, 0))
   
     if (str1 < str2) return true
     if (str1 > str2) return false
 
     return s1.padEnd(20, "Z") < s2.padEnd(20, "Z")
 }