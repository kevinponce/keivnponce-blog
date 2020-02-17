const defaultColor = '#ffffff';
const fillColor = '#69d2e7';

export default class Cell {
  constructor(island) {
    this.island = island;
    this.touched = false;
  }

  touchCell() {
    this.touched = true;
  }

  color() {
    if (this.touched) {
      return fillColor;
    }

    return defaultColor;
  }
}
