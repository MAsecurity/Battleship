function updateHover(range) {
  for (let i = 0; i < range.length; i++) {
    let getDiv = document.querySelector(
      `#main-board-${range[i][0]}-${range[i][1]}`,
    );
    getDiv.classList.add("hovering");
  }
}
export { updateHover };
