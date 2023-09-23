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

const canWidth = 550;
canvas.width = 550;
canvas.height = 850;

const context = canvas.getContext("2d");

// Player input

let playerInput = 0;
let currentKeystroke = "";
const distance = 5;

// left ArrowLeft
// right ArrowRight
// a KeyA
// d KeyD

window.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft" || e.code === "KeyA") {
    playerInput = -distance;
    currentKeystroke = e.code;
  } else if (e.code === "ArrowRight" || e.code === "KeyD") {
    playerInput = distance;
    currentKeystroke = e.code;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.code === currentKeystroke) {
    playerInput = 0;
  }
});

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
  canvas.clearRect(0, 0, 600, 400);
}

function drawPlayer() {
  const { color, x, y, width, height } = player;

  player.fillStyle = color;
}

const player = {
  x: 0,
  y: 300,
  width: 20,
  height: 50,
  color: "black",
};

// let i = 0;
// setInterval(() => {
//   player.x = Number(player.x) + playerInput;
//   if (player.x > canWidth - player.width) {
//     player.x = canWidth - player.width;
//   } else if (player.x < 0) {
//     player.x = 0;
//   }
//   clear();
//   drawBackground();
//   drawPlayer();
//   i + i + 0.1;
// }, 20);
