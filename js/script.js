const btnDraw = document.querySelector("#btn-draw");
const btnClear = document.querySelector("#btn-clear");

btnDraw.addEventListener("click", (e) => {
  console.log("Draw click");
  drawBackground();
});

btnClear.addEventListener("click", (e) => {
  console.log("Clear click");
  context.clearRect(0, 0, canvas.width, canvas.height);
});

// Main Canvas
const canvas = document.querySelector("#artboard");
canvas.width = 550;
canvas.height = 850;

const context = canvas.getContext("2d");

function drawBackground() {
  // Bg
  const bg = canvas.getContext("2d");
  bg.fillStyle = "#74CCDA";
  bg.fillRect(0, 0, 550, 850);

  // Road
  const road = canvas.getContext("2d");
  road.fillStyle = "#938D9A";
  road.fillRect(0, 500, 550, 350);

  // Player
  const player = canvas.getContext("2d");
  player.fillStyle = "#273230";
  player.fillRect(0, 0, 65, 120);
}

function clear() {
  //
  canvas.clearRect(0, 0, 600, 400);
}
