import boards from './setups/initBoard';
import Ship from './classes/ship';

let setPositions = false;

function draggable(shipImg, board, ship) {
  const image = shipImg;
  let directionX = 0;
  let directionY = 0;
  let posX = (ship !== null) ? ship.position.x : 0;
  let posY = ship ? ship.position.y : 0;
  let startX = 0;
  let startY = 0;
  let drag = false;

  shipImg.addEventListener('mousedown', (event) => {
    if (setPositions === true) {
      event.preventDefault();
      startX = event.clientX;
      startY = event.clientY;
      board.removeShip(ship);
      drag = true;
    }
  });

  document.addEventListener('mousemove', (event) => {
    if (drag === true && setPositions === true) {
      event.preventDefault();
      if (event.clientX % 50 === 0) {
        if (startX > event.clientX) {
          posX -= 1;
          directionX -= 52;
          startX -= 52;
        } else {
          posX += 1;
          directionX += 52;
          startX += 52;
        }
      }
      if (event.clientY % 50 === 0) {
        if (startY > event.clientY) {
          posY += 1;
          directionY -= 52;
          startY -= 52;
        } else {
          posY -= 1;
          directionY += 52;
          startY += 52;
        }
      }
      if (ship.direction === 'horizontal') {
        image.style.transform = `rotate(90deg) translate(${directionY}px,-${directionX - 50}px)`;
      } else { image.style.transform = `translate(${directionX}px,${directionY}px)`; }
    }
  });

  document.addEventListener('mouseup', () => {
    if (drag === true) {
      drag = false;
      const movedShip = new Ship(ship.length, ship.direction, { x: posX, y: posY });
      board.insertShip(movedShip);
    }
  });
}

function initImage(ship, image) {
  if (ship.direction === 'horizontal') { image.classList.add('horizontal'); } else { image.classList.add('vertical'); }
}

function rotation(ship, image) {
  const rotatedShip = ship;
  const shipImg = image;

  if (rotatedShip.direction !== 'horizontal') {
    rotatedShip.direction = 'horizontal';
    shipImg.classList.remove('vertical');
    shipImg.classList.add('horizontal');
  } else {
    rotatedShip.direction = 'vertical';
    shipImg.classList.remove('horizontal');
    shipImg.classList.add('vertical');
  }
}

function animateExplosion(element) {
  let position = 105;
  const interval = 90;
  const explosion = document.createElement('div');
  explosion.className = 'explosion';

  setInterval(() => {
    explosion.style.backgroundPosition = `-${position}px -2px`;
    if (position < 630) {
      position += 105;
    } else {
      position = 105;
    }
  }, interval);
  element.appendChild(explosion);
}

function endGameMessage(winner) {
  const messageWrapper = document.createElement('div');
  messageWrapper.className = 'message-wrapper';
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message-div';

  if (winner.user === true) {
    messageDiv.innerHTML = '<p>Congrats! You win!</p>';
  } else {
    messageDiv.innerHTML = "<p>It's ok .You lost</p>";
  }
  const reloadButton = document.createElement('button');
  reloadButton.className = 'reload-button';
  reloadButton.innerHTML = 'Play again';
  reloadButton.addEventListener('click', () => { window.location.reload(); });

  messageDiv.appendChild(reloadButton);
  messageWrapper.appendChild(messageDiv);
  document.body.appendChild(messageWrapper);
}

function playerPLays(game, cell, cellDiv, ship) {
  const div = cellDiv;
  const missedAttackImg = document.createElement('img');
  missedAttackImg.src = './src/images/splash.png';
  game.move(cell);
  if (cell.occupied === null && div.children.length === 0) {
    div.style.opacity = 1;
    div.appendChild(missedAttackImg);
  } else {
    div.style.opacity = 1;
    animateExplosion(div);
    if (ship.energy === 0 && !game.gameOver()) {
      document.getElementsByClassName(`ship-${ship.length}-destroyed-image`)[0].style.display = 'block';
    } else if (game.gameOver()) {
      endGameMessage(game.gameOver());
    }
  }
}

function computerPlays(game, ship) {
  const missedAttackImg = document.createElement('img');
  missedAttackImg.src = './src/images/splash.png';
  const pos = game.computerMove(ship);
  const enemyBoardCell = document.querySelector(`.cell[data-x~="${pos.x}"][data-y~="${pos.y}"]`);
  const newShip = Object.values(boards)[0].map[pos.x][pos.y].occupied;
  if (newShip === null && enemyBoardCell.children.length === 0) {
    enemyBoardCell.appendChild(missedAttackImg);
  } else {
    animateExplosion(enemyBoardCell);
  }
}

function available(cell, board) {
  const occupiedMissedCell = board.missedAttacksPositions.some((
    (pos) => pos.x === cell.x && pos.y === cell.y));
  const occupiedAttackedCell = board.attacksOnTargetPositions.some((
    (pos) => pos.x === cell.x && pos.y === cell.y));

  if (occupiedMissedCell || occupiedAttackedCell) return false;
  return true;
}

function gameStart(game) {
  const board = Object.values(boards)[1];
  let cellIndex = 0;

  board.map.forEach((element) => {
    element.forEach((cell) => {
      const cellDiv = document.getElementsByClassName('cell-dark')[cellIndex];
      const missedAttackImg = document.createElement('img');
      missedAttackImg.src = './src/images/splash.png';
      const ship = cell.occupied;
      cellDiv.addEventListener('click', () => {
        if (!game.gameOver() && available(cell, board)) {
          playerPLays(game, cell, cellDiv, ship);
          computerPlays(game, ship);
        }
      });
      cellIndex += 1;
    });
  });
}

function startGameButton(game) {
  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'start-game-button';
  const startButton = document.createElement('button');
  startButton.className = 'startButton';
  startButton.innerText = 'Start';
  buttonDiv.appendChild(startButton);
  document.getElementsByClassName('container')[0].insertAdjacentElement('beforebegin', buttonDiv);

  startButton.addEventListener('click', () => {
    setPositions = false;
    buttonDiv.style.display = 'none';
    gameStart(game);
  });
}

function setPositionsButton(game) {
  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'set-positions-button';
  const directionButton = document.createElement('button');
  directionButton.className = 'directionButton';
  directionButton.innerText = 'Begin positioning';
  buttonDiv.appendChild(directionButton);
  document.getElementsByClassName('container')[0].insertAdjacentElement('beforebegin', buttonDiv);

  directionButton.addEventListener('click', () => {
    setPositions = true;
    buttonDiv.style.display = 'none';
    startGameButton(game);
  });
}

function createBoards() {
  const boardsArray = Object.values(boards);
  const container = document.createElement('div');
  container.className = 'container';

  boardsArray.forEach((board, index) => {
    const boardDiv = document.createElement('div');
    boardDiv.className = `player-${index + 1}-board`;

    board.map.forEach((element) => {
      element.forEach((coordinate) => {
        let ship = coordinate.occupied;
        const shipHead = (
          (ship !== null) ? ship.getPosition()[coordinate.occupied.getPosition().length - 1] : null
        );
        const shipImg = document.createElement('img');
        const cell = document.createElement('div');
        cell.className = ((index === 1) ? 'cell-dark' : 'cell');
        cell.dataset.x = coordinate.x;
        cell.dataset.y = coordinate.y;
        boardDiv.appendChild(cell);

        if (ship !== null
           && shipHead.x === coordinate.x && shipHead.y === coordinate.y && index === 0) {
          shipImg.className = `ship-${ship.length}-image`;
          shipImg.src = `./src/images/ship-${ship.length}.png`;
          shipImg.style.position = 'absolute';
          shipImg.addEventListener('dblclick', (event) => {
            if (setPositions === true) {
              event.preventDefault();
              board.removeShip(ship);
              rotation(ship, shipImg);
              board.rotateShip(ship);
            }
          });
          initImage(ship, shipImg);
          cell.appendChild(shipImg);
        } else if (ship !== null
           && shipHead.x === coordinate.x && shipHead.y === coordinate.y && index === 1) {
          ship = coordinate.occupied;
          shipImg.className = `ship-${ship.length}-destroyed-image`;
          shipImg.src = `./src/images/ship-${ship.length}-destroyed.png`;
          shipImg.style.position = 'absolute';
          shipImg.style.display = 'none';
          initImage(ship, shipImg);
          cell.appendChild(shipImg);
        }
        draggable(shipImg, board, ship);
      });
    });
    container.appendChild(boardDiv);
    document.body.appendChild(container);
  });
}

function initDom(game) {
  createBoards();
  setPositionsButton(game);
}
export default initDom;
