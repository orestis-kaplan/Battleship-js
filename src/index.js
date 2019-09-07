import './styles/style.css';
import board from './setups/initBoard';
import initDom from './dom';
import Game from './game';
import Player from './classes/player';

const p1 = new Player(board.board1, true);
const p2 = new Player(board.board2, false);
const game = new Game(p1, p2);
initDom(game);
