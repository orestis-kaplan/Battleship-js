
function shipExistsInPosition(ship, position) {
  if (ship) {
    return ship.getPosition().some((element) => element.x === position.x && element.y === position.y);  
  }else{
    return false;
  }
  
}

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
    this.ships = [];
    this.attacksOnTargetPositions = [];
    this.missedAttacksPositions = [];
  }

  receiveAttack(ship, position) {
    if (shipExistsInPosition(ship, position)) {
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
    const index = this.ships.findIndex((element) => element.position.x === ship.position.x
                                        && element.position.y === ship.position.y);
    this.ships.splice(index, 1);

    ship.getPosition().forEach(pos =>{ this.map[pos.x][pos.y].occupied = null;});
  }

  insertShip(ship) {
    this.ships.push(ship);    
    ship.getPosition().forEach(pos => this.map[pos.x][pos.y].occupied = ship);
  }

  rotateShip(ship) {    
    ship.getRotatedPositions().forEach(pos => this.map[pos.x][pos.y].occupied = ship);              
  }
}
