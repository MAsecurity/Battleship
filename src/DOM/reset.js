import { addDivs } from "./addDivs";
function reset(){
  let playingBoard = document.querySelector(".playing-board")
  let myBoard = document.querySelector(".my-board")
  while(playingBoard.firstElementChild && myBoard.firstElementChild){
    playingBoard.removeChild(playingBoard.firstElementChild)
    myBoard.removeChild(myBoard.firstElementChild);
  }
}
function playGameReset(humanBoard,computerBoard){
  for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
      humanBoard[i][j] = 0;
      computerBoard[i][j] = 0;
    }
  }
}

export{reset,playGameReset}