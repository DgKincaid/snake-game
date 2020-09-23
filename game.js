import { SPEED,
  getSnakeHead,
  snakeIntersection,
  update as updateSnake,
  render as renderSnake,
} from './snake.js';

import {
  update as updateFood,
  render as renderFood,
} from './food.js'

import {
  outsideGrid
} from './grid.js'

let lastRenderTime = 0;
let gameOver = false;

const gameBoard = document.getElementById('game-board');
function main(currentTime) {

  if (gameOver) {
    if(confirm('You lost. Replay?')) {
      window.location = '/'
    }

    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceRender = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceRender < 1 / SPEED) return;

  lastRenderTime = currentTime;

  update();
  render();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();

  hasLost();
}

function render() {
  gameBoard.innerHTML = '';

  renderSnake(gameBoard);
  renderFood(gameBoard);
}

function hasLost() {
  let snakeHead = getSnakeHead();

  gameOver = outsideGrid(snakeHead) || snakeIntersection();
}

