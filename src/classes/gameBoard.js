
function initMap(size){
  var sx = 0;
  var sy = 0;
  let map = Array.from(Array(size),row => row = Array.from(Array(size),(column) =>{	
      if(sy > size-1){
        sx++;
        sy=0;
      }      
      return column = {x: sx, y: sy++,occupied: null};
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
    ship.getPosition().forEach(pos =>{ this.map[pos.x][pos.y].occupied = null;});
  }

  insertShip(ship) {
    ship.getPosition().forEach(pos => this.map[pos.x][pos.y].occupied = ship);
  }

  rotateShip(ship) {    
    ship.getRotatedPositions().forEach(pos => this.map[pos.x][pos.y].occupied = ship);              
  }
}
