function higherVersion(ver1, ver2) {
  let arr1 = ver1.split('.').map(Number);
  let arr2 = ver2.split('.').map(Number);

  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > arr2[i]) {
          return true;
      } else if (arr1[i] < arr2[i]) {
          return false;
      }
  }
  
  return false;
}