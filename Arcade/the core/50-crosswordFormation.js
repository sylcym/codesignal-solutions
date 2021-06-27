function crosswordFormation(words) {
  let count = 0,
    a,
    b,
    c,
    d,
    a2,
    d2;

  for (let i = 0; i < 4; i += 1) {
    a = words[i];
    for (let a1 = 0; a1 < a.length - 1; a1 += 1) {
      for (let j = 0; j < 4; j += 1) {
        if (j === i) continue;

        b = words[j];
        for (let b2 = 1; b2 < b.length; b2 += 1) {
          if (b[b2] !== a[a1]) continue;

          for (let b1 = 0; b1 < b2 - 1; b1 += 1) {
            for (let k = 0; k < 4; k += 1) {
              if (k === i || k === j) continue;

              c = words[k];
              d = words[6 - i - j - k];
              if (b2 - b1 >= d.length) continue;

              for (let c1 = 0; c1 < c.length - 1; c1 += 1) {
                if (c[c1] != b[b1]) continue;

                for (let c2 = c1 + 2; c2 < c.length; c2 += 1) {
                  a2 = a1 + (c2 - c1);
                  if (a2 >= a.length) continue;

                  for (let d1 = 0; d1 < d.length; d1 += 1) {
                    if (d[d1] !== c[c2]) continue;

                    d2 = d1 + (b2 - b1);
                    if (d2 >= d.length) break;

                    if (a[a2] !== d[d2]) continue;

                    count += 1;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return count;
}
