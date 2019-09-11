import Ship from '../src/classes/ship';

describe('Contructor tests', () => {
  test('Ship must have length', () => {
    expect(() => new Ship()).toThrow(Error);
  });
  test('Ship must have direction', () => {
    expect(() => new Ship(5)).toThrow(Error);
  });
  test('Energy should be equal to length', () => {
    const ship = new Ship(5, 'horizontal', { x: 0, y: 0 });
    expect(ship.energy).toBe(5);
  });
});

describe('Energy tests', () => {
  const ship = new Ship(5, 'horizontal', { x: 0, y: 0 });

  test("Ship's energy should be descreased by 1 using hit()", () => {
    ship.hit();
    expect(ship.energy).toBe(4);
  });
  test('When ship is sunk then isSunk should return true', () => {
    ship.energy = 0;
    expect(ship.isSunk()).toBeTruthy();
  });
  test('When using hit() and energy is 1 isSunk should return true', () => {
    ship.energy = 1;
    expect(ship.isSunk()).toBeFalsy();
    ship.hit();
    expect(ship.isSunk()).toBeTruthy();
  });
});

describe('Occupied positions of a ship', () => {
  const ship = new Ship(5, 'horizontal', { x: 5, y: 5 });

  test('Horizontal ship with length 5 and position: {x: 5,y:5} should return {x:10 , y:5}', () => {
    const pos =    [
      { x: 5, y: 5, occupied: ship },
      { x: 6, y: 5, occupied: ship },
      { x: 7, y: 5, occupied: ship },
      { x: 8, y: 5, occupied: ship },
      { x: 9, y: 5, occupied: ship },
    ]
    expect(ship.getPosition()).toEqual(pos);
  });

  test('Vertical ship with length 5 and position: {x: 5,y:5} should return {x:5 , y:10}', () => {
    ship.direction = 'vertical';
    const pos =  [
      { x: 5, y: 5, occupied: ship },
      { x: 5, y: 6, occupied: ship },
      { x: 5, y: 7, occupied: ship },
      { x: 5, y: 8, occupied: ship },
      { x: 5, y: 9, occupied: ship },
    ]
    expect(ship.getPosition()).toEqual(pos);
  });
});

describe('Rotated ship positions', () => {
  const ship = new Ship(5, 'horizontal', { x: 5, y: 5 });

  test('Vertical ship with length 5 and position: {x: 5,y:5} should return {x:10 , y:1}', () => {
    ship.direction = 'vertical';
    const pos =  [
      { x: 9, y: 5, occupied: ship },
      { x: 9, y: 4, occupied: ship },
      { x: 9, y: 3, occupied: ship },
      { x: 9, y: 2, occupied: ship },
      { x: 9, y: 1, occupied: ship },
    ]
    expect(ship.getRotatedPositions()).toEqual(pos);
  });

  test('Horizontal ship with length 5 and position: {x: 5,y:5} should return {x:1..5 , y:9}', () => {
    ship.position = { x: 5, y: 5 };
    ship.direction = 'horizontal';
    const pos =   [
      { x: 5, y: 9, occupied: ship },
      { x: 4, y: 9, occupied: ship },
      { x: 3, y: 9, occupied: ship },
      { x: 2, y: 9, occupied: ship },
      { x: 1, y: 9, occupied: ship },
    ]
    expect(ship.getRotatedPositions()).toEqual(pos);
  });
});
