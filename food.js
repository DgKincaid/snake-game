import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js';

let food = getRandomEmptyPosition();
const EXPANSION_RATE = 5;

export function update() {

  if(onSnake(food)) {
    console.log('true')
    expandSnake(EXPANSION_RATE);

    food = getRandomEmptyPosition();
  }
}

export function render(gameBoard) {
  const foodElement = document.createElement('div');

  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;

  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
}

function getRandomEmptyPosition() {
  let newPosition;

  while(newPosition == null || onSnake(newPosition)) {
    newPosition = randomGridPosition(21, 21);
  }

  return newPosition;
}
