function stolenLunch(note) {
  let alph = 'abcdefghij'
  let nums = '0123456789'
  
  note = note.split('');
  
  for (let i = 0; i < note.length; i++) {
    if (alph.includes(note[i])) note[i] = nums.charAt(alph.indexOf(note[i]))
    else if (nums.includes(note[i])) note[i] = alph.charAt(nums.indexOf(note[i]))
  }
  
  return note.join('');
}