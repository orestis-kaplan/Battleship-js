const Game = function (p1, p2) {
  const player1 = p1;
  const player2 = p2;
  const currentPlayer = p1;
  const finished = false;

  function gameOver() {
    let winner = null;
    if (this.player1.board.ships === 0) {
      this.finished = true;
      winner = this.player2;
    } else if (this.player2.board.ships === 0) {
      this.finished = true;
      winner = this.player1;
    }
    return winner;
  }

  function move(latlong) {
    const enemy = (
      (this.currentPlayer === this.player1) ? this.player2 : this.player1);
    if (this.finished === false) {
      enemy.board.receiveAttack({ x: latlong.x, y: latlong.y });
      this.currentPlayer = enemy;
    }
  }


  function computerMove() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    const pos = { x, y };
    this.move(pos);
    return pos;
  }

  return {
    player1, player2, currentPlayer, finished, gameOver, move, computerMove,
  };
};

export default Game;
