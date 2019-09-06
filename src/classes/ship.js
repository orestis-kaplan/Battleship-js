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
      if (this.direction === 'horizontal') {
        if(this.position.x + i > 9)
          occupiedPositionsOfShip.push({ x: this.position.x - i, y: this.position.y ,occupied: this});
        else
          occupiedPositionsOfShip.push({ x: this.position.x + i, y: this.position.y ,occupied: this});
      } else {
        if(this.position.y + i > 9)
          occupiedPositionsOfShip.push({ x: this.position.x, y: this.position.y - i ,occupied: this});
        else
          occupiedPositionsOfShip.push({ x: this.position.x, y: this.position.y + i ,occupied: this});
      }
    }
    return occupiedPositionsOfShip;
  }

  getRotatedPositions(){
    const rotatedPositions = [];
    let newPosition = null;
    for (let i = 0; i < this.length; i += 1) {
      if (this.direction !== 'horizontal') {
        rotatedPositions.push({x: this.position.x + this.length - 1, y: this.position.y - i, occupied: this});
        newPosition = {x: this.position.x + this.length - 1, y: this.position.y - i};
      }else{
        rotatedPositions.push({x: this.position.x - i, y: this.position.y + this.length - 1, occupied: this});
        newPosition = {x: this.position.x - i, y: this.position.y + this.length - 1};
      }
    }
    if(newPosition !== null)
      this.position = newPosition;

    return rotatedPositions;
  }
}
