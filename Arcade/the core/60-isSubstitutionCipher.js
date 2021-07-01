function isSubstitutionCipher(string1, string2) {
  return [... string1].every((val,index) => string1.indexOf(val) === string2.indexOf(string2[index]));
 }
 