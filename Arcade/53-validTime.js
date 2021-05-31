function validTime(time) {
  return time.split(':')[0] < 24 && time.split(':')[1] < 60;
}
