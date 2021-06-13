function longestWord(text) {
  let lenText = text.match(/\w[a-z]{0,}/gi);
  return lenText.sort((a, b) => b.length - a.length)[0];
}
