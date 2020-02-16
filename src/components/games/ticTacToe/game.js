export const X = 'x';
export const O = 'o';

export default class TicTacToe {
  constructor(size) {
    this.size = size;
    this.board = this.buildBoard();
    this.turn = X;
    this.gameOver = false;
    this.winner = null;
  }

  toggleTurn() {
    this.turn = (this.turn === X ? O : X);
  }

  place(x, y) {
    const size = this.board.length;

    if (this.gameOver) return false;
    if (x > size) return false;
    if (y > size) return false;
    if (typeof this.board[y][x] === 'string') return false;

    this.board[y][x] = this.turn;
    this.gameOver = this.checkGameOver();
    this.toggleTurn();
    return true;
  }

  buildBoard() {
    let board = new Array(this.size);

    for (let i = 0; i < this.size; i++) {
      board[i] = new Array(this.size);
    }

    return board;
  }

  reset() {
    this.board = this.buildBoard();
    this.gameOver = false;
  }

  checkGameOver() {
    if (this.playerWon()) {
      return true;
    }

    if (this.catsGame()) {
      return true;
    }

    return false;
  }

  playerWonHorizontal() {
    for (let y = 0; y < this.board.length; y++) {
      if (this.arrayWon(this.board[y])) return true;
    }

    return false;
  }

  playerWonVertical() {
    for (let x = 0; x < this.board.length; x++) {
      let ar = [];
      for (let y = 0; y < this.board.length; y++) {
        ar.push(this.board[y][x]);
      }

      if (this.arrayWon(ar)) return true;
    }

    return false;
  }

  playerWonDiagonal() {
    if (this.arrayWon([this.board[0][0], this.board[1][1], this.board[2][2]])) return true;
    if (this.arrayWon([this.board[0][2], this.board[1][1], this.board[2][0]])) return true;

    return false;
  }

  arrayWon(ar) {
    const checkAr = [...new Set(ar)];
    return checkAr.length === 1 && checkAr[0] === this.turn;
  }

  playerWon() {
    if (this.playerWonHorizontal() || this.playerWonVertical() || this.playerWonDiagonal()) {
      this.winner = this.turn;
      return true;
    }

    return false;
  }

  catsGame() {
    for (let y = 0; y < this.board.length; y++) {
      if ([...new Set(this.board[y])].indexOf(undefined) !== -1) {
        return false;
      }
    }

    return true;
  }
}
