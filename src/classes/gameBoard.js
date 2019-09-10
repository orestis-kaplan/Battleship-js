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

const Gameboard = function () {
  const map = initMap(10);
  const ships = 5;
  const attacksOnTargetPositions = [];
  const missedAttacksPositions = [];

  function receiveAttack(position) {
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

  function removeShip(ship) {
    ship.getPosition().forEach((pos) => this.map[pos.x][pos.y].occupied = null);
  }

  function insertShip(ship) {
    ship.getPosition().forEach((pos) => this.map[pos.x][pos.y].occupied = ship);
  }

  function rotateShip(ship) {
    ship.getRotatedPositions().forEach((pos) => this.map[pos.x][pos.y].occupied = ship);
  }

  return {
    map, ships, attacksOnTargetPositions, missedAttacksPositions, receiveAttack, removeShip, insertShip, rotateShip,
  };
};
export default Gameboard;
