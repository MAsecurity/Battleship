import { gameBoard } from "./gameboard";
function players() {
  let human = gameBoard();
  let computer = gameBoard();
  return { human, computer };
}
export { players };
