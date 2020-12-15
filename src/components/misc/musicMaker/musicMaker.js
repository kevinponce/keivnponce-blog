export const X = 'x';
export const O = 'o';
import Button from './button'

export default class MusicMaker {
  constructor(p, height, width) {
    this.p = p;
    this.height = height;
    this.width = width;

    this.grid = buildGrid();
  }

  buildGrid() {
    let grid = new Array(this.height);

    for (let i = 0; i < this.height; i++) {
      grid[i] = new Array(this.width);
    }

    for (let x = 0; x < this.height; x++) {
      for (let y = 0; y < this.height; y++) {
        grid[x][y] = new Button(p, x, )
      }
    }

    return grid;
  }
}
