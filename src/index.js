import './styles/style.css';
import board from './setups/initBoard.js';
import initDom from './dom';

let board2 = board.board1;
let ship = board2.ships[3];
board2.receiveAttack(ship,{x:0,y:1});
initDom();
