import Piece from '../piece';

export const SHAPE = 'SQUARE';
export const COLOR = '#F9D423'; // yellow

export default class SquarePiece extends Piece {
  constructor(x, y) {
    super(x, y, 1);
  }

  // **
  // **
  buildCells() {
    const x = this.x;
    const y = this.y;

    return [
      new Cell(x, y, COLOR),
      new Cell(x + 1, y, COLOR),
      new Cell(x, y - 1, COLOR),
      new Cell(x + 1, y - 1, COLOR),
    ];
  }
}
