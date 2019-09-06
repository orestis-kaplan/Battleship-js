import boards from '../src/setups/initBoard.js';

let setPositions = false;

function createBoards(){    
    let boardsArray = Object.values(boards);
    let container = document.createElement("div");
    container.className = "container";
    
    boardsArray.forEach((board,index) => {
        let boardDiv = document.createElement('div');
        boardDiv.className = `player-${index+1}-board`;

        board.map.forEach(element=>{
            element.forEach(coordinate=>{
                let ship = coordinate.occupied ? coordinate.occupied.getPosition()[coordinate.occupied.getPosition().length - 1] : null;
                let shipImg = document.createElement('img');
                let cell = document.createElement('div');
                cell.className = ((index === 1) ? 'cell-dark' : 'cell');
                cell.dataset.x = coordinate.x;
                cell.dataset.y = coordinate.y;
                boardDiv.appendChild(cell);

                if(ship !== null && ship.x === coordinate.x && ship.y === coordinate.y && index == 0){
                    ship = coordinate.occupied;  
                    shipImg.className = `ship-${ship.length}-image`;
                    shipImg.src = `./src/images/ship-${ship.length}.png`;
                    shipImg.style.position = 'absolute';
                    shipImg.addEventListener('dblclick',(event)=>{      
                        if(setPositions === true){
                            event.preventDefault();          
                            board.removeShip(ship);                    
                            rotation(ship,shipImg);                    
                            board.rotateShip(ship);     
                        }                    
                    });
                    initImage(ship,shipImg);
                    cell.appendChild(shipImg);    
                }                
                draggable(shipImg,board,ship);
            });
        });
        container.appendChild(boardDiv);
        document.body.appendChild(container);
        console.log(board);

    });
}

function draggable(shipImg,board,ship){
    let directionX = 0;
    let directionY = 0;
    let startX = 0;
    let startY = 0;
    let drag = false;

    shipImg.addEventListener("mousedown",(event)=>{
        if(setPositions === true){
            event.preventDefault();
            startX = event.clientX;
            startY = event.clientY;
            board.removeShip(ship);   
            drag = true;                 
        }                    
    });

    document.addEventListener("mousemove",(event)=>{
        if(drag === true && setPositions === true){
            event.preventDefault();
            if(event.clientX % 50 === 0){
                if(startX > event.clientX){
                    ship.position.x--;
                    directionX -= 52;
                    startX -= 52;
                }else{
                    ship.position.x++;
                    directionX += 52;
                    startX += 52;
                }             
            }
            if(event.clientY % 50 === 0){
                if(startY > event.clientY){
                    ship.position.y++;
                    directionY -= 52;
                    startY -= 52;
                }else{
                    ship.position.y--;
                    directionY += 52;
                    startY += 52;
                }
            }
            if(ship.direction === 'horizontal'){                
                shipImg.style.transform = `rotate(90deg) translate(${directionY}px,-${directionX-50}px)`;
            }
                
            else
                shipImg.style.transform = `translate(${directionX}px,${directionY}px)`;                
        }       
    });

    document.addEventListener('mouseup', e => {
        if (drag === true) {
            drag = false;
            board.insertShip(ship);                    
            console.log(ship,board);
        }        
      });
}

function initImage(ship,image){
    if(ship.direction == 'horizontal')
        image.classList.add('horizontal');    
    else
        image.classList.add('vertical');    
}

function rotation(ship,image){
    if(ship.direction !== 'horizontal'){
        ship.direction = 'horizontal';
        image.classList.remove('vertical');
        image.classList.add('horizontal');
    }
    else{
        ship.direction = 'vertical';    
        image.classList.remove('horizontal');
        image.classList.add('vertical');
    }
}

function animateExplosion(element){
    let position = 105;
    const interval = 90;
    let explosion = document.createElement('div');
    explosion.className = 'explosion';

    setInterval(()=>{
        explosion.style.backgroundPosition = `-${position}px -2px`;
        if(position < 630){
            position += 105;
        }else{
            position = 105;
        }
    },interval);
    element.appendChild(explosion);
}

function setPositionsButton(){
    let buttonDiv = document.createElement("div");
    buttonDiv.className = "set-positions-button";
    let directionButton = document.createElement("button");
    directionButton.className = "directionButton";
    directionButton.innerText = "Begin positioning";
    buttonDiv.appendChild(directionButton);
    document.getElementsByClassName("container")[0].insertAdjacentElement("beforebegin",buttonDiv);

    directionButton.addEventListener("click",()=>{
        setPositions = true;
        buttonDiv.style.display = "none";
        startGameButton();
    });
}

function startGameButton(){
    let buttonDiv = document.createElement("div");
    buttonDiv.className = 'start-game-button'; 
    let startButton = document.createElement("button");
    startButton.className = "startButton";
    startButton.innerText = "Start";
    buttonDiv.appendChild(startButton);
    document.getElementsByClassName("container")[0].insertAdjacentElement("beforebegin",buttonDiv);

    startButton.addEventListener("click",()=>{
        setPositions = true;
        buttonDiv.style.display = "none";
    });
}

function initDom(){
    createBoards();
    setPositionsButton();
}
export default initDom;