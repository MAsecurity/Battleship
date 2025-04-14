function duplicateCoordinates(range, board) {
  for (let i = 0; i < range.length; i++) {
    let num1 = range[i][0];
    let num2 = range[i][1];
    let curValue = board[num1][num2];
    if (curValue != 0) {
      return true;
    }
  }
  return false;
}
export { duplicateCoordinates };
