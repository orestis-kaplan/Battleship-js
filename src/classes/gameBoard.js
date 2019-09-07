
function initMap(size) {
  let sx = 0;
  let sy = 0;
  const map = Array.from(Array(size), (row) => row = Array.from(Array(size), (column) => {
    if (sy > size - 1) {
      sx += 1;
      sy = 0;
    }
    column = { x: sx, y: sy++, occupied: null };
    return column;
  }));
  return map;
}

export default class Gameboard {
  constructor() {
    this.map = initMap(10);
    this.ships = 5;
    this.attacksOnTargetPositions = [];
    this.missedAttacksPositions = [];
  }

  receiveAttack(position) {
    const ship = this.map[position.x][position.y].occupied;
    if (ship !== null) {
      ship.hit();
      if (ship.isSunk()) {
        this.ships -= 1;
      } else {
        this.attacksOnTargetPositions.push(position);
      }
    } else {
      this.missedAttacksPositions.push(position);
    }
  }

  removeShip(ship) {
    ship.getPosition().forEach((pos) => this.map[pos.x][pos.y].occupied = null);
  }

  insertShip(ship) {
    ship.getPosition().forEach((pos) => this.map[pos.x][pos.y].occupied = ship);
  }

  rotateShip(ship) {
    ship.getRotatedPositions().forEach((pos) => this.map[pos.x][pos.y].occupied = ship);
  }
}
