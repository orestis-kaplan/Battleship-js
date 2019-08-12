export default class Ship {
  constructor(length, direction, position) {
    this.length = length;
    this.direction = direction;
    this.position = position;
    this.energy = length;

    if (typeof length === 'undefined') {
      throw new Error('Must define length');
    }
    if (typeof direction === 'undefined') {
      throw new Error('Must define direction');
    }
  }

  hit() {
    this.energy -= 1;
  }

  isSunk() {
    return this.energy === 0;
  }

  getPosition() {
    const occupiedPositionsOfShip = [];
    for (let i = 0; i < this.length; i += 1) {
      if (this.direction === 'horizontal') { occupiedPositionsOfShip.push({ x: this.position.x + i, y: this.position.y }); } else { occupiedPositionsOfShip.push({ x: this.position.x, y: this.position.y + i }); }
    }
    console.log(occupiedPositionsOfShip);

    return occupiedPositionsOfShip;
  }
}
