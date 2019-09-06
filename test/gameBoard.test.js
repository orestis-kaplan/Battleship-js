import Ship from '../src/classes/ship.js';
import GameBoard from '../src/classes/gameBoard.js';

describe('Constructor tests', () => {
  test('Initial values should be correct', () => {
    const board = new GameBoard(5);
    expect(board.map.length).toBe(10);
    expect(board.ships).toHaveLength(0);
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
    board.ships.push(ship);
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
    const position = { x: 3, y: 0 };
    board.receiveAttack(ship, position);
    expect(board.attacksOnTargetPositions).toHaveLength(1);
    expect(board.missedAttacksPositions).toHaveLength(0);
  });

  test('When receiveAttack is UNsuccessfull missedAttacksPositions should not be empty', () => {
    const position = { x: 3, y: 3 };
    board.attacksOnTargetPositions = [];
    board.receiveAttack(ship, position);
    expect(board.attacksOnTargetPositions).toHaveLength(0);
    expect(board.missedAttacksPositions).toHaveLength(1);
  });

  test('When receiveAttack is successfull and ship`s energy should be 4 and aliveships should be 5', () => {
    const position = { x: 3, y: 0 };
    ship.energy = 5;
    board.receiveAttack(ship, position);
    expect(ship.energy).toBe(4);
    expect(board.ships).toHaveLength(1);
  });

  test('When receiveAttack is successfull and ship is sunk aliveships should be 4', () => {
    const position = { x: 3, y: 0 };
    ship.energy = 1;
    board.receiveAttack(ship, position);
    expect(ship.isSunk()).toBeTruthy();
  });

});

describe('Ship removal and placement', () => {
  let board;
  let ship;

  beforeEach(() => {
    board = new GameBoard();
    ship = new Ship(2, 'horizontal', { x: 0, y: 0 });
    board.ships.push(ship);
  });
  
  test('After insertShip board.ships sould have length 2', () => {
    board.insertShip(ship);
    expect(board.ships).toHaveLength(2);
  });

  test("After insert the position in the board should be filled with the ship at right position",()=>{
    let pos = board.map[0][0];
    board.insertShip(ship);
    expect(pos.occupied).toEqual(ship);
  });
  
  test('Remove a ship.Board`s ships should be 0', () => {
    board.removeShip(ship);
    expect(board.ships).toHaveLength(0);
  });

  test('When ship is removed occupied property changes to null in the map of board',()=>{
    board.map.forEach(element => element.forEach(pos=>{
      expect(pos.occupied).toBeNull();
    }));
  });

});
