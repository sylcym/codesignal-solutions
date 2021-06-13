function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  return Math.min(yourLeft,yourRight) === Math.min(friendsLeft,friendsRight)&&
     Math.max(yourLeft,yourRight) === Math.max(friendsLeft,friendsRight);

}