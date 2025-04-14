const grabRange = require("./grabRange");
const validateRange = require("./validateRange");
import { duplicateCoordinates } from "./duplicateCoordinates";
import { ships } from "./ship";
import { createArr } from "../logic/createArr";
function gameBoard() {
  let myShips = ships();
  let gameBoard = createArr();
  let map = new Map();

  function placeShip(coordinates, rotation, shipName) {
    let curShip = myShips[shipName];
    let getRange = grabRange(coordinates, rotation, curShip.length);
    let verifyRange = validateRange(getRange);
    let checkDuplicateCoordinates = duplicateCoordinates(getRange, gameBoard);

    if (verifyRange && !checkDuplicateCoordinates) {
      for (let i = 0; i < getRange.length; i++) {
        let num1 = getRange[i][0];
        let num2 = getRange[i][1];
        gameBoard[num1][num2] = 1;
        map.set(JSON.stringify(getRange[i]), shipName);
      }
    }
    // console.log(gameBoard,getRange,verifyRange,checkDuplicateCoordinates)
    console.log("final", gameBoard, map);
  }
  function recieveAttack(coordinates) {
    if (map.has(JSON.stringify(coordinates))) {
      let getShipName = map.get(JSON.stringify(coordinates));
      myShips.hit(myShips[getShipName]);
      myShips.isSunk(myShips[getShipName]);
      gameBoard[coordinates[0]][coordinates[1]] = 2; // hit ship
      return 2;
    } else {
      gameBoard[coordinates[0]][coordinates[1]] = -1; // missed shot
      return -1;
    }
  }
  function allShipsAreSunked() {
    if (
      myShips.carrier.sunk &&
      myShips.battleship.sunk &&
      myShips.submarine.sunk &&
      myShips.cruiser.sunk &&
      myShips.destroyer.sunk
    ) {
      console.log(myShips.destroyer);
      return true;
    }
    return false;
  }
  function resetting() {
    let arr = ["carrier", "battleship", "submarine", "cruiser", "destroyer"];
    for (let i = 0; i < arr.length; i++) {
      myShips[arr[i]].sunk = false;
      myShips[arr[i]].numOfHits = 0;
    }
    map = new Map();
    console.log("Reset", map, myShips, gameBoard);
  }
  return { gameBoard, placeShip, recieveAttack, allShipsAreSunked, resetting };
}
export { gameBoard };
