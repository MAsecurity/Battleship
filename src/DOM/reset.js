import { addDivs } from "./addDivs";
function reset(){
  let playingBoard = document.querySelector(".playing-board")
  let myBoard = document.querySelector(".my-board")
  while(playingBoard.firstElementChild && myBoard.firstElementChild){
    playingBoard.removeChild(playingBoard.firstElementChild)
    myBoard.removeChild(myBoard.firstElementChild);
  }
}

export{reset}