function additionWithoutCarrying(param1, param2) {
  let str1 = String(param1);
  let str2 = String(param2);
  let max = Math.max(str1.length, str2.length);
  let sum = [];

  str1 = str1.padStart(max, '0');
  str2 = str2.padStart(max, '0');

  for (let i = 0; i < max; i++) sum.push(+str1[i] + +str2[i]);

  return +sum.map((el) => (el >= 10 ? String(el)[1] : el)).join('');
}
