import { addDivs } from "./addDivs";
import { buttonClicked } from "./listen";
function home() {
  const content = document.createElement("div");
  content.classList.add("content");

  const header = document.createElement("div");
  header.textContent = "Battleship";
  header.classList.add("battleship");

  const boardContainer = document.createElement("div");
  boardContainer.classList.add("board-container");

  const board = document.createElement("div");
  board.classList.add("board");
  const boardHeader = document.createElement("div");
  boardHeader.classList.add("board-header");
  const boardHeaderTitleAndButtonContainer = document.createElement("div");
  boardHeaderTitleAndButtonContainer.classList.add(
    "board-header-title-button-container",
  );
  const actualTitle = document.createElement("div");
  actualTitle.classList.add("title");
  actualTitle.textContent = `Add your carrier ship`;
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  const actualButton = document.createElement("button");
  actualButton.textContent = "Rotate";
  actualButton.onclick = () => {
    buttonClicked();
  };
  const playingBoardContainer = document.createElement("div");
  playingBoardContainer.classList.add("playing-board-container");
  const playingBoard = document.createElement("div");
  playingBoard.classList.add("playing-board");

  const myBoardContainer = document.createElement("div");
  myBoardContainer.classList.add("my-board-container");
  const myBoard = document.createElement("div");
  myBoard.classList.add("my-board");

  document.body.appendChild(content);
  content.appendChild(header);
  content.appendChild(boardContainer);
  boardContainer.appendChild(board);
  board.appendChild(boardHeaderTitleAndButtonContainer);
  boardHeaderTitleAndButtonContainer.appendChild(actualTitle);
  boardHeaderTitleAndButtonContainer.appendChild(buttonContainer);
  buttonContainer.appendChild(actualButton);
  board.appendChild(playingBoardContainer);
  playingBoardContainer.appendChild(playingBoard);
  board.appendChild(myBoardContainer);
  myBoardContainer.appendChild(myBoard);
  addDivs();
}
export { home };
