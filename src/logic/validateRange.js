function validateRange(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] >= 10 || arr[i][1] >= 10) {
      return false;
    }
  }
  return true;
}
module.exports = validateRange;
