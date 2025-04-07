import { onHovering } from "./listen";
import { onClicked } from "./listen";
import { addListeners } from "./listen";
function addDivs(){
  const theBoard = document.querySelector(".playing-board");
  const myBoard = document.querySelector(".my-board")
  for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
      let newDiv = document.createElement("div");
      newDiv.setAttribute("id",`main-board-${i}-${j}`);
      let newDiv2 = document.createElement("div");
      newDiv2.setAttribute("id",`my-board-${i}-${j}`);
      theBoard.appendChild(newDiv);
      myBoard.appendChild(newDiv2);
    }
  }
  addListeners()
}
export{addDivs}