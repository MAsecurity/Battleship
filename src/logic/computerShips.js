import { ships } from "./ship";
import grabRange from "./grabRange";
import validateRange from "./validateRange";
import { status } from "../DOM/curStatus";
import { duplicateCoordinates } from "./duplicateCoordinates";
function computerShips(computer) {
  let x = 0;
  let myShips = ships();
  let compStatus = status();
  let shipName = compStatus.arr[x];
  let curRotation = "horizontal";
  let myBoard = computer.gameBoard;
  compStatus.arr.length;
  for (let i = 0; i <= 4; ) {
    curRotation = i % 2 == 0 ? "vertical" : "horizontal";
    let c1 = Math.floor(Math.random() * 5);
    let c2 = Math.floor(Math.random() * 5);
    let coor = [c1, c2];
    let range = grabRange(coor, curRotation, myShips[shipName].length);
    let checkValidRange = validateRange(range);
    let checkDuplicateCoordinates = duplicateCoordinates(range, myBoard);
    if (!checkValidRange || checkDuplicateCoordinates) {
      continue;
    } else {
      shipName = compStatus.arr[x];
      computer.placeShip(coor, curRotation, shipName);
      i++;
      x++;
    }
  }
}
export { computerShips };
