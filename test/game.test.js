import Game from '../src/game.js';
import Player from '../src/classes/player.js';
import GameBoard from '../src/classes/gameBoard.js';
import Ship from '../src/classes/ship.js';

describe("Game over should return the right winner",()=>{
    const board1 = new GameBoard();
    const board2 = new GameBoard();
    const p1 = new Player(board1);
    const p2 = new Player(board2,false);
    const game = new Game(p1,p2);
    board1.ships.length = 5;
    board2.ships.length = 5;

    test("Winner should be null",()=>{
        expect(game.gameOver()).toBe(null);
    });

    test("Winner should be player1 when player2 ships are 0",()=>{        
        p2.board.ships.length = 0;
        expect(game.gameOver()).toEqual(p1);
    });
});

describe("Checking the move function",()=>{
    let board1;
    let board2;
    let p1;
    let p2;
    let game;
    let clickOnPos;

    beforeEach(() => {
        board1 = new GameBoard();
        board2 = new GameBoard();
        p1 = new Player(board1);
        p2 = new Player(board2,false);
        game = new Game(p1,p2);
        clickOnPos = {x: 2,y: 8};
    });

    test("When making a move playes should switch",()=>{    
        game.move(clickOnPos);        
        expect(game.currentPlayer).toEqual(p2);
    });

    test("When making a random move players should change",()=>{
        game.computerMove();                
        expect(game.currentPlayer).toEqual(p2);    
    });

    test("When making a move in position that a ship exists receive attack should be successful",()=>{
        let ship = new Ship(5,'horizontal',clickOnPos);
        board2.insertShip(ship);
        game.move(clickOnPos);
        expect(board2.map[clickOnPos.x][clickOnPos.y].occupied.energy).toBe(4);
    });

});