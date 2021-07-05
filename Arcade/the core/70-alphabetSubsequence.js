function alphabetSubsequence(s) {
  let subsequence = true;
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) <= s.charCodeAt(i - 1)) subsequence = false;
  }

  return subsequence;
}
