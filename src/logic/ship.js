function ships() {
  let carrier = { length: 5, numOfHits: 0, sunk: false };
  let battleship = { length: 4, numOfHits: 0, sunk: false };
  let cruiser = { length: 3, numOfHits: 0, sunk: false };
  let submarine = { length: 3, numOfHits: 0, sunk: false };
  let destroyer = { length: 2, numOfHits: 0, sunk: false };

  const hit = (obj) => {
    obj.numOfHits += 1;
  };
  const isSunk = (obj) => {
    if (obj.numOfHits >= obj.length) {
      obj.sunk = true;
    }
  };
  return { carrier, battleship, cruiser, submarine, destroyer, hit, isSunk };
}
export { ships };
