import { reset } from "./reset";
import { addDivs } from "./addDivs";
function display(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let getDiv = document.querySelector(`#main-board-${i}-${j}`);
      if (board[i][j] == 0) {
        getDiv.classList.remove("hovering");
      }
      if (board[i][j] == 1) {
        getDiv.classList.remove("hovering");
        getDiv.classList.add("clicked");
      }
    }
  }
}
function updateMinimap(board) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let getDiv = document.querySelector(`#my-board-${i}-${j}`);
      if (board[i][j] == 1) {
        getDiv.classList.add("placed-ship");
      }
    }
  }
}

function gameOverUpdate(computerBoard, humanBoard) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      updateMain(i, j);
      UpdateMini(i, j);
    }
  }
  function updateMain(i, j) {
    let mainBoard = document.querySelector(`#main-board-${i}-${j}`);
    if (computerBoard[i][j] == -1) {
      mainBoard.classList.add("missed");
    } else if (computerBoard[i][j] == 2) {
      mainBoard.classList.add("hit");
    }
  }
  function UpdateMini(i, j) {
    let myBoard = document.querySelector(`#my-board-${i}-${j}`);
    if (humanBoard[i][j] == 1) {
      myBoard.classList.add("placed-ship");
    } else if (humanBoard[i][j] == -1) {
      myBoard.classList.add("missed");
    } else if (humanBoard[i][j] == 2) {
      myBoard.classList.add("hit");
    }
  }
}

function updateAttackMain(coor, board) {
  let getDiv = document.querySelector(`#main-board-${coor[0]}-${coor[1]}`);
  let curValue = board[coor[0]][coor[1]];
  console.log(curValue, coor, board);

  // console.log(board[coor[0]][coor[1]],coor,"logging")
  if (board[coor[0]][coor[1]] == -1) {
    getDiv.classList.add("missed");
  } else if (board[coor[0]][coor[1]] == 2) {
    getDiv.classList.add("hit");
  }
}
function updateAttackmini(coor, board) {
  let getDiv = document.querySelector(`#my-board-${coor[0]}-${coor[1]}`);
  let curValue = board[coor[0]][coor[1]];
  console.log(curValue, coor, board);
  // console.log(coor,board,"logging")
  if (curValue == -1) {
    getDiv.classList.add("missed");
  } else if (curValue == 2) {
    getDiv.classList.add("hit");
  }
}
export {
  display,
  updateMinimap,
  updateAttackMain,
  updateAttackmini,
  gameOverUpdate,
};
