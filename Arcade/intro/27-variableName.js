function variableName(name) {
  let regEx = /^[a-z_]+[a-z0-9_]*$/i;

  return regEx.test(name);
}
