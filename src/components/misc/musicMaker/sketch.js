// inspiration: https://codepen.io/codetim/pen/abdaejE

import Button from './button'

export default function(p) {
  const height = 700;
  const width = 700;

  const numberOfBarsVert = 10;
  const numberOfBarsHor = 20;

  const lineWidth = 1;
  const barHeight = height / numberOfBarsVert;
  const barWidth = width / numberOfBarsHor

  // colors
  const colors = {
    background: '#EB3349',
    line: '#000000',
    active: '#00ff00',
    inactive: '#00ffcc'
  }

  let grid = []

  p.setup = function() {
    p.createCanvas(width, height);
    grid = new Array(numberOfBarsVert);

    for (let i = 0; i < numberOfBarsVert; i++) {
      grid[i] = new Array(numberOfBarsHor);
    }

    for (let y = 0; y < numberOfBarsVert; y++) {
      for (let x = 0; x < numberOfBarsHor; x++) {
        const initX = barWidth * x - (lineWidth / 2);
        const initY = barHeight * y - (lineWidth / 2)

        grid[y][x] = new Button(p, initX, initY, barWidth, barHeight, false, colors.active, colors.inactive)
      }
    }
  };

  p.draw = function() {
    p.background(colors.background);
    p.drawLines();
  }

  p.mouseClicked = function() {
    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[0].length; x++) {
        if (grid[y][x]) {
          var button = grid[y][x];

          if (button.clicked(p.mouseX, p.mouseY)) {
            button.click();
          }
        }
      }
    }
  }

  p.drawLines = function() {
    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[0].length; x++) {
        if (grid[y][x]) {
          grid[y][x].draw();
        }
      }
    }
  }
}
