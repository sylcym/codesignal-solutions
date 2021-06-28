function isCaseInsensitivePalindrome(inputString) {
  let str = inputString.toUpperCase();
   return str === str.split('').reverse().join('');
}