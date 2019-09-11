function initMap(size) {
  const map = Array.from(
    Array(size), (_element, row) => Array.from(
      Array(size), (_ele, column) => (
        { x: row, y: column, occupied: null }),
    ),
  );
  return map;
}

function Gameboard() {
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
    ship.getPosition().forEach((pos) => { this.map[pos.x][pos.y].occupied = null; });
  }

  function insertShip(ship) {
    ship.getPosition().forEach((pos) => { this.map[pos.x][pos.y].occupied = ship; });
  }

  function rotateShip(ship) {
    ship.getRotatedPositions().forEach((pos) => { this.map[pos.x][pos.y].occupied = ship; });
  }

  return {
    map,
    ships,
    attacksOnTargetPositions,
    missedAttacksPositions,
    receiveAttack,
    removeShip,
    insertShip,
    rotateShip,
  };
}
export default Gameboard;
