function resetHeader() {
  let buttonDiv = document.querySelector(".button-container button");
  buttonDiv.remove();
  let getTitle = document.querySelector(".title");
  getTitle.textContent = "";
}
export { resetHeader };
