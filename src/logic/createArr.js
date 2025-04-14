function createArr() {
  let arr = [];
  let i = 0;
  while (i < 10) {
    let newArr = new Array();
    newArr.length = 10;
    newArr.fill(0);
    arr.push(newArr);
    i++;
  }
  return arr;
}

export { createArr };
