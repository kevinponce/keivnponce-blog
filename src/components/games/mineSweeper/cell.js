export const MINE = '.';

export default class Cell {
  constructor(x, y, value) {
    this.x = x;
    this.y = y
    this.value = value
    this.show = true;
  }

  showMe() {
    this.show = true;
  }

  isMine() {
    return this.value === MINE;
  }
}
