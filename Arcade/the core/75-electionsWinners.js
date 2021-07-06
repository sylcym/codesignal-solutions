function electionsWinners(votes, k) {
  let max = Math.max(...votes);
  let numMax = votes.filter(el => el=== max).length;
  
  return votes.reduce((acc, el) => 
    acc + ((el===max && numMax ===1) || (el+k> max ? 1 : 0)), 0);
}