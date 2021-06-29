function findEmailDomain(address) {
  let str = address.split('@');
     return str[str.length-1];
  }