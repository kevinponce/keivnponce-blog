import Cell from './cell';
/*
export const  L = 'L';
export const  Z = 'Z';
export const  S = 'S';
export const  J = 'J';
export const  TEE = 'Tee';
export const  LINE = 'Line';
export const  SQUARE = 'squre';
export const SHAPES = [L, Z, S, J, TEE, LINE, SQUARE];

const COLOR_Z = '#FF4E50'; // red
const COLOR_S = '#6AF087'; // green
const COLOR_J = '#3F63B5'; // blue
const COLOR_TEE = '#FF696B'; // pink
const COLOR_LINE = '#69D2E7'; // light blue


function randomShape() {
  return parseInt(Math.random() * SHAPES.length);
}

function buildCells(shape, x, y) {
  switch(shape) {
    case L:
      return LCells(x, y, 0);
    default:
      return SquareCells(x, y, 0);
  }
}
*/
export default class Piece {
  constructor(x, y, numberOfShapes) {
    this.x = x;
    this.y = y;
    this.numberOfShapes = numberOfShapes;
    this.dir = 0;
    this.cells = this.buildCells();
  }

  rotate() {
    this.dir += 1;

    if (this.dir > this.numberOfShapes) this.dir = 0;

    this.cells = this.buildCells();
  }

  buildCells() {
    throw 'Build cells is not defined';
  }
}