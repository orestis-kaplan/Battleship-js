const Game = function (player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.currentPlayer = player1;
  this.finished = false;

  this.gameOver = () => {
    let winner = null;
    if (this.player1.board.ships === 0) {
      this.finished = true;
      winner = this.player2;
    } else if (this.player2.board.ships === 0) {
      this.finished = true;
      winner = this.player1;
    }
    return winner;
  };

  this.move = (latlong) => {
    const enemy = (
      (this.currentPlayer === this.player1) ? this.player2 : this.player1);
    if (this.finished === false) {
      enemy.board.receiveAttack({ x: latlong.x, y: latlong.y });
      this.currentPlayer = enemy;
    }
  };


  this.computerMove = () => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    const pos = { x, y };
    this.move(pos);
    return pos;
  };
};

export default Game;
