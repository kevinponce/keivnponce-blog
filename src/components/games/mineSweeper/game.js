import Cell, { MINE } from './cell';

export default class MineSweeper {
  constructor(size, numberOfMines) {
    this.size = size;
    this.numberOfMines = numberOfMines;
    this.board = this.buildBoard();
    this.gameOver = false;
    this.won = false;
  }

  place(x, y) {
    const size = this.board.length;

    if (this.gameOver) return false;
    if (x > size) return false;
    if (y > size) return false;

    if (this.board[y][x].isMine()) {
      this.board[y][x].showMe();
      this.gameOver = true;
      this.won = false;
      return false;
    }

    if (this.board[y][x].value === 0) {
      this.floodFill(x, y);
    } else {
      this.board[y][x].showMe();
    }

    this.won = this.playerWon();
    return true;
  }

  floodFill(x, y) {
    if (0 > x || x >= this.size) return false;
    if (0 > y || y >= this.size) return false;

    let cell = this.board[y][x];
    if (cell.isMine()) return false;
    if (cell.show) return false;

    cell.showMe();
    if (cell.value !== 0) return false;

    this.floodFill(x, y - 1); // north
    this.floodFill(x, y + 1); // south
    this.floodFill(x - 1, y); // west
    this.floodFill(x + 1, y); // east
  }

  buildMinesArray() {
    let mines = new Array(this.numberOfMines);

    let availLocations = new Array(this.size * this.size);
    for (let i = 0; i < availLocations.length; i++) {
      availLocations[i] = i;
    }

    for (let i = 0; i < mines.length; i++) {
      let rand = parseInt(Math.random() * availLocations.length);
      let loc = availLocations.splice(rand, 1)[0];

      mines[i] = loc;
    }

    return mines;
  }

  isAMine(mines, x, y) {
    if (x < 0) return false;
    if (y < 0) return false;
    if (x >= this.size) return false;
    if (y >= this.size) return false;
    if (mines.indexOf((x + 1) * (y + 1)) !== -1) return 1;

    return 0;
  }

  buildBoard() {
    let board = new Array(this.size);
    let mines = this.buildMinesArray();

    for (let y = 0; y < this.size; y++) {
      board[y] = new Array(this.size);

      for (let x = 0; x < this.size; x++) {
        if (this.isAMine(mines, x, y)) {
          board[y][x] = new Cell(x, y, MINE);
        } else {
          let value = 0;

          value += this.isAMine(mines, x - 1, y - 1)
          value += this.isAMine(mines, x, y - 1)
          value += this.isAMine(mines, x + 1, y - 1)

          value += this.isAMine(mines, x - 1, y)
          value += this.isAMine(mines, x + 1, y)

          value += this.isAMine(mines, x - 1, y + 1)
          value += this.isAMine(mines, x, y + 1)
          value += this.isAMine(mines, x + 1, y + 1)

          board[y][x] = new Cell(x, y, value);
        }
      }
    }

    return board;
  }

  reset() {
    this.board = this.buildBoard();
    this.gameOver = false;
    this.won = false;
  }

  playerWon() {
    for (let y = 0; y < this.board.length; y++) {
      for (let x = 0; x < this.board[y].length; x++) {
        if (this.board[y][x].show === false) {
          return false;
        }
      }
    }
    
    return true;
  }
}
