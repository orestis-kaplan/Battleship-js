import Ship from '../src/classes/ship.js';
import GameBoard from '../src/classes/gameBoard.js';

describe('Constructor tests', () => {
  test('Initial values should be correct', () => {
    const board = new GameBoard(5);
    expect(board.map.length).toBe(10);
    expect(board.ships).toBe(5);
    expect(board.attacksOnTargetPositions).toHaveLength(0);
    expect(board.missedAttacksPositions).toHaveLength(0);
  });
});

describe('ReceiveAttack inner function', () => {
  let board;
  let ship;

  beforeEach(() => {
    board = new GameBoard();
    ship = new Ship(5, 'horizontal', { x: 0, y: 0 });
    board.insertShip(ship);
  });

  test('Attack on ship is successfull', () => {
    const position = { x: 3, y: 0 };
    const successfullAttack = ship.getPosition().some((element) => element.x == position.x && element.y == position.y);
    expect(successfullAttack).toBeTruthy();
  });

  test('Attack on ship is unsuccessfull', () => {
    const position = { x: 3, y: 3 };
    const unsuccessfullAttack = ship.getPosition().some((element) => element.x == position.x && element.y == position.y);
    expect(unsuccessfullAttack).toBeFalsy();
  });

  test('When receiveAttack is successfull attacksOnTargetPositions should not be empty', () => {
    const position = { x: 0, y: 0 };
    board.receiveAttack(position);
    expect(board.attacksOnTargetPositions).toHaveLength(1);
    expect(board.missedAttacksPositions).toHaveLength(0);
  });

  test('When receiveAttack is UNsuccessfull missedAttacksPositions should not be empty', () => {
    const position = { x: 3, y: 3 };
    board.attacksOnTargetPositions = [];
    board.receiveAttack(position);
    expect(board.attacksOnTargetPositions).toHaveLength(0);
    expect(board.missedAttacksPositions).toHaveLength(1);
  });

  test('When receiveAttack is successfull and ship`s energy should be 4 and aliveships should be 5', () => {
    const position = { x: 3, y: 0 };
    ship.energy = 5;
    board.receiveAttack(position);
    expect(ship.energy).toBe(4);
    expect(board.ships).toBe(5);
  });

  test('When receiveAttack is successfull and ship is sunk alive ships should be 4', () => {
    const position = { x: 3, y: 0 };
    ship.energy = 1;
    board.receiveAttack(position);
    expect(ship.isSunk()).toBeTruthy();
  });

});

describe('Ship removal and placement', () => {
  let board;
  let ship;

  beforeEach(() => {
    board = new GameBoard();
    ship = new Ship(2, 'horizontal', { x: 0, y: 0 });
  });
  
  test('After insertShip board.ships sould have length 2', () => {
    board.insertShip(ship);
    expect(board.map[ship.position.x][ship.position.y].occupied).toEqual(ship);
  });

  test("After insert the position in the board should be filled with the ship at right position",()=>{
    let pos = board.map[0][0];
    board.insertShip(ship);
    expect(pos.occupied).toEqual(ship);
  });
  
  test('When removing ship from board expect that position to be empty', () => {
    board.removeShip(ship);
    expect(board.map[ship.position.x][ship.position.y].occupied).toBeNull();
  });

  test('When ship is removed occupied property changes to null in the map of board',()=>{
    board.map.forEach(element => element.forEach(pos=>{
      expect(pos.occupied).toBeNull();
    }));
  });

});
