function grabRange(coordinates, rotation, length) {
  if (rotation == "vertical") {
    let newArr = [coordinates];
    let verValue = coordinates[0];
    const horValue = coordinates[1];
    for (let i = 0; i < length - 1; i++) {
      newArr.push([(verValue += 1), horValue]);
    }
    return newArr;
  }
  if (rotation == "horizontal") {
    let newArr = [coordinates];
    const verValue = coordinates[0];
    let horValue = coordinates[1];
    for (let i = 0; i < length - 1; i++) {
      newArr.push([verValue, (horValue += 1)]);
    }
    return newArr;
  }
}
module.exports = grabRange;
