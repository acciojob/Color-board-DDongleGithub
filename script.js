//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");

  // Create 800 boxes and append them to the board
  for (let i = 0; i < 800; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    board.appendChild(box);
  }
});
