import { arrayShips } from "./shipsArr";
function status() {
  let rotation = "horizontal";
  let arr = [...arrayShips];
  let curShip = arr[0];
  return { curShip, rotation, arr };
}
export { status };
