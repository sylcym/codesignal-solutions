function lineUp(commands) {
  let count = 0;
  let line = true;

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === 'L' || commands[i] === 'R') line = !line;

    if (line === true) count++;
  }

  return count;
}
