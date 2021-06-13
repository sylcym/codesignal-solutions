function buildPalindrome(st) {
  let str = st;
  let i = st.length - 1;

  while (str !== str.split('').reverse().join('')) {
    str = st + st.slice(0, -i).split('').reverse().join('');
    i--;
  }

  return str;
}
