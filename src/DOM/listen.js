import grabRange from "../logic/grabRange";
import validateRange from "../logic/validateRange";
import { status } from "./curStatus";
import { ships } from "../logic/ship";
import { players } from "../logic/player";
import { duplicateCoordinates } from "../logic/duplicateCoordinates";
import { updateHover } from "./updateHover";
import { reset } from "./reset";
import { addDivs } from "./addDivs";
import { display } from "./displayBoard";
import { resetHeader } from "./resetHeader";
import { updateMinimap } from "./displayBoard";
import { updateAttackMain } from "./displayBoard";
import { updateAttackmini } from "./displayBoard";
import { computerShips } from "../logic/computerShips";
import { gameOverUpdate } from "./displayBoard";
let myShips = ships()
let curStatus = status();
let play = players()
let humanPlayer = play.human;
let computerPlayer = play.computer;

let compSet = new Set();
let humanSet = new Set();
computerShips(computerPlayer);
let gameStart = false;
function addListeners(){
  for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
      let theDiv = document.querySelector(`#main-board-${i}-${j}`);
      if(gameStart == false){
        theDiv.onclick = () => {
          onClicked([i,j])
        }
        theDiv.onmouseover = () => {
          onHovering([i,j])
        }
      }else if(gameStart == 'finish'){
        continue;
      }
      else{
        theDiv.onclick = () => {
          attack([i,j]);
        }
      }
    }
  }
  
}
function onClicked(coordinates){
  if(validChecker(coordinates)){
    if(curStatus.arr.length <= 1){
      let finalEl = curStatus.arr.shift();
      humanPlayer.placeShip(coordinates,curStatus.rotation,finalEl);
      reset();
      resetHeader();
      gameStart = true;
      addDivs();
      updateMinimap(humanPlayer.gameBoard)
      console.log(humanPlayer.gameBoard)
      return;
    }
    else{
      curStatus.arr.shift()
      let getTitle = document.querySelector(".title");
      getTitle.textContent = `Add your ${curStatus.arr[0]} ship`;
      humanPlayer.placeShip(coordinates,curStatus.rotation,curStatus.curShip)
      curStatus.curShip = curStatus.arr[0];
      display(humanPlayer.gameBoard)
    }

  }
  
}
function onHovering(coordinates){
  display(humanPlayer.gameBoard)
  if(!curStatus.arr.length){
    return;
  }
  if(validChecker(coordinates)){
    let range = grabRange(coordinates,curStatus.rotation, myShips[`${curStatus.curShip}`].length);
    updateHover(range)
  }
}

function buttonClicked(){
  curStatus.rotation = curStatus.rotation == 'horizontal' ? 'vertical' : 'horizontal';
}

function validChecker(coordinates){
  let range = grabRange(coordinates,curStatus.rotation, myShips[`${curStatus.curShip}`].length);
  let validationOfRange = validateRange(range);
  let myBoard = humanPlayer.gameBoard;
  let checkDuplicateCoordinates = duplicateCoordinates(range,myBoard);
  if(checkDuplicateCoordinates || !validationOfRange){
    return false;
  }
  return true;
}
function attack(coordinates){
  let getTitle = document.querySelector(".title");
  let c1 = Math.floor(Math.random() * 10);
  let c2 = Math.floor(Math.random() * 10);
  let computerCoordinates = [c1,c2]
  if(humanSet.has(JSON.stringify(coordinates))){
    console.log("same coordinates")
    return;
  }else if(compSet.has(JSON.stringify(computerCoordinates))){
    while(true){
      console.log("oops computer made same coordinates")
      computerCoordinates = [(Math.floor(Math.random() * 10)),(Math.floor(Math.random() * 10))]
      if(!compSet.has(computerCoordinates)){
        break;
      }
    }
  }
  humanSet.add(JSON.stringify(coordinates));
  compSet.add(JSON.stringify(computerCoordinates))
  computerPlayer.recieveAttack(coordinates);
  humanPlayer.recieveAttack(computerCoordinates);


  if (computerPlayer.allShipsAreSunked()){
    getTitle.textContent = "Human player won";
    console.log("human-player won");
    gameOver()
    return;
  }else if(humanPlayer.allShipsAreSunked()){
    getTitle.textContent = "Computer player won"
    console.log("computer-player-won")
    gameOver()
    return;
  }

  updateAttackMain(coordinates,computerPlayer.gameBoard);
  updateAttackmini(computerCoordinates,humanPlayer.gameBoard)


}
function playAgain(){
  gameStart = false;
  reset();
  resetHeader();
  addDivs();
  humanPlayer.resetting();
  computerPlayer.resetting();
  compSet = new Set();
  humanSet = new Set();
  let buttonContainer = document.querySelector(".button-container");
  const button = document.createElement("button");
  button.textContent = "Rotate";
  buttonContainer.appendChild(button)
  let title = document.querySelector(".title");
  title.textContent = "Add your carrier ship"
  button.onclick = () => {
    buttonClicked()
  }
  console.log(humanPlayer.gameBoard)

}
function gameOver(){
  gameStart = 'finish';
  reset();
  let buttonContainer = document.querySelector(".button-container");
  const button = document.createElement("button");
  button.textContent = "Play again"
  button.onclick = () => {
    playAgain()
  }
  buttonContainer.appendChild(button)
  addDivs();
  gameOverUpdate(computerPlayer.gameBoard,humanPlayer.gameBoard)



}
export {onHovering, onClicked, buttonClicked,attack,addListeners}