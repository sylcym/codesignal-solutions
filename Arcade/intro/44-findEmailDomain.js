function findEmailDomain(address) {
  let arrayAddress = address.split('@');
  return arrayAddress[arrayAddress.length - 1];
}
