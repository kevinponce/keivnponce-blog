import Piece from './piece';

export default class Tetris {
  constructor(sizeX, sizeY) {
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.screen = this.buildArray();
    this.current = new Piece();
    this.next = new Piece();
  }

  
  setNext() {
    this.next = new Piece();
  }

  buildArray() {
    let array = new Array(this.sizeY);

    for (let i = 0; i < array.length; i++) {
      array[i] = new Array(this.sizeX);
    }

    return array;
  }
}
