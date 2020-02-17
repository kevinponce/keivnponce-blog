import Piece from '../piece';

export const SHAPE = 'L';
export const COLOR = '#F38630'; // orange

// *
// *
// **
function cellsRightSideUp(x, y) {
  return [
    new Cell(x, y, COLOR),
    new Cell(x + 1, y, COLOR),
    new Cell(x, y - 1, COLOR),
    new Cell(x, y - 2, COLOR),
  ];
}

// ****
// *
function cellsRotateRight(x, y) {
  return [
    new Cell(x, y, COLOR),
    new Cell(x, y - 1, COLOR),
    new Cell(x + 1, y - 1, COLOR),
    new Cell(x + 2, y - 1, COLOR),
  ];
}

// *
// ***
function cellsRotateLeft(x, y) {
  return [
    new Cell(x, y, COLOR),
    new Cell(x + 1, y, COLOR),
    new Cell(x + 2, y, COLOR),
    new Cell(x, y - 1, COLOR),
  ];
}

// **
//  *
//  *
function cellsUpSideDown(x, y) {
  return [
    new Cell(x, y, COLOR),
    new Cell(x, y - 1, COLOR),
    new Cell(x, y - 2, COLOR),
    new Cell(x - 1, y - 2, COLOR),
  ];
}

export default class LPiece extends Piece {
  constructor(x, y) {
    super(x, y, 4);
  }

  buildCells() {
    const x = this.x;
    const y = this.y;

    switch(this.dir) {
    case 1: 
        return cellsRotateRight(x, y);
      case 2: 
        return cellsUpSideDown(x, y);
      case 3: 
        return cellsRotateLeft(x, y);
      default:
         return cellsRightSideUp(x, y);
    }
  }
}
