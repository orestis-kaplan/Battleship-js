import GameBoard from '../classes/gameBoard';
import Ship from '../classes/ship';

const board1 = new GameBoard();
const board2 = new GameBoard();

const positions1 = [
  { x: 2, y: 8, direction: 'vertical' },
  { x: 3, y: 3, direction: 'vertical' },
  { x: 6, y: 3, direction: 'horizontal' },
  { x: 7, y: 5, direction: 'vertical' },
  { x: 4, y: 9, direction: 'horizontal' },
];

const positions2 = [[
  { x: 4, y: 7, direction: 'vertical' },
  { x: 8, y: 3, direction: 'vertical' },
  { x: 2, y: 3, direction: 'horizontal' },
  { x: 7, y: 5, direction: 'vertical' },
  { x: 0, y: 9, direction: 'horizontal' },
],
[
  { x: 3, y: 4, direction: 'vertical' },
  { x: 5, y: 6, direction: 'vertical' },
  { x: 2, y: 3, direction: 'horizontal' },
  { x: 7, y: 4, direction: 'vertical' },
  { x: 5, y: 8, direction: 'horizontal' },
],
[
  { x: 7, y: 6, direction: 'vertical' },
  { x: 5, y: 8, direction: 'vertical' },
  { x: 3, y: 2, direction: 'horizontal' },
  { x: 4, y: 4, direction: 'vertical' },
  { x: 5, y: 0, direction: 'horizontal' },
]
];


positions1.forEach((battleship, length) => {
  const ship = new Ship(length + 1, battleship.direction, { x: battleship.x, y: battleship.y });
  board1.insertShip(ship);
});
const randomPos = Math.floor(Math.random() * 3);

positions2[randomPos].forEach((battleship, length) => {
  const ship = new Ship(length + 1, battleship.direction, { x: battleship.x, y: battleship.y });
  board2.insertShip(ship);
});


export default { board1, board2 };
