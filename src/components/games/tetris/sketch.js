import Tetris from './game';

export default function(p) {
  const width = 420;
  const sizeX = 20;
  const sizeY = 40;
  const squareSize = width / sizeX;
  const height = sizeY * squareSize;
  
  const backgroundColor = '#ffffff';

  let tetris;

  p.setup = function() {
    p.createCanvas(width, height);
    tetris = new Tetris(sizeX, sizeY);
  };

  p.draw = function() {
    p.background(backgroundColor)

    if (!tetris) {
      return false;
    }    

    p.drawSquare(0, 1, 0);
    p.drawL(3, 3, 0)
    p.drawJ(10, 3, 0)
    p.drawLine(8, 9, 0);
    p.drawTee(0, 6, 0);
    p.drawZ(15, 10, 0);
    p.drawZ(12, 20, 1);
    p.drawS(15, 1, 0);
    p.drawS(15, 15, 1);
    p.drawLines();
  };

  p.drawLines = function() {
    if (!tetris) return false;

    for (let y = 0; y <= height; y++) {
      p.stroke(0);
      p.line(0, squareSize * y, width, squareSize * y);

      for (let x = 0; x <= width; x++) {
        p.line(squareSize * x, 0, squareSize * x, height);
      }
    }
  }

  p.drawShape = function () {
    //if (tetris.current === ){

    //}
  }

  p.drawSquare = function (x, y, dir) {
    p.noStroke();
    p.fill('#F38630');
    p.rect(x * squareSize, y * squareSize, squareSize, squareSize);
    p.rect((x + 1) * squareSize, y * squareSize, squareSize, squareSize);
    p.rect(x * squareSize, (y - 1) * squareSize, squareSize, squareSize);
    p.rect((x + 1) * squareSize, (y - 1) * squareSize, squareSize, squareSize);
  }

  p.drawL = function (x, y, dir) {
    p.noStroke();
    p.fill('#F38630');
    p.rect(x * squareSize, y * squareSize, squareSize, squareSize);
    p.rect((x + 1) * squareSize, y * squareSize, squareSize, squareSize);
    p.rect(x * squareSize, (y - 1) * squareSize, squareSize, squareSize);
    p.rect(x * squareSize, (y - 2) * squareSize, squareSize, squareSize);
  }

  p.drawJ = function (x, y, dir) {
    p.noStroke();
    p.fill('#F38630');
    p.rect(x * squareSize, y * squareSize, squareSize, squareSize);
    p.rect((x + 1) * squareSize, y * squareSize, squareSize, squareSize);
    p.rect((x + 1) * squareSize, (y - 1) * squareSize, squareSize, squareSize);
    p.rect((x + 1) * squareSize, (y - 2) * squareSize, squareSize, squareSize);
  };

  p.drawLine = function (x, y, dir) {
    p.noStroke();
    p.fill('#F38630');

    if (dir === 0) {
      p.rect(x * squareSize, y * squareSize, squareSize, squareSize);
      p.rect((x + 1) * squareSize, y * squareSize, squareSize, squareSize);
      p.rect((x + 2) * squareSize, y * squareSize, squareSize, squareSize);
      p.rect((x + 3) * squareSize, y * squareSize, squareSize, squareSize);
    } else {
      p.rect(x * squareSize, y * squareSize, squareSize, squareSize);
      p.rect(x * squareSize, (y - 1) * squareSize, squareSize, squareSize);
      p.rect(x * squareSize, (y - 2) * squareSize, squareSize, squareSize);
      p.rect(x * squareSize, (y - 3) * squareSize, squareSize, squareSize);
    }
  }

  p.drawTee = function (x, y, dir) {
    p.noStroke();
    p.fill('#F38630');
    p.rect(x * squareSize, y * squareSize, squareSize, squareSize);
    p.rect(x * squareSize, (y - 1) * squareSize, squareSize, squareSize);
    p.rect(x * squareSize, (y - 2) * squareSize, squareSize, squareSize);
    p.rect((x + 1) * squareSize, (y - 1) * squareSize, squareSize, squareSize);
  }

  p.drawZ = function (x, y, dir) {
    p.noStroke();
    p.fill('#F38630');
    if (dir === 0) {
      p.rect(x * squareSize, y * squareSize, squareSize, squareSize);
      p.rect((x + 1) * squareSize, y * squareSize, squareSize, squareSize);
      p.rect(x * squareSize, (y - 1) * squareSize, squareSize, squareSize);
      p.rect((x - 1) * squareSize, (y - 1) * squareSize, squareSize, squareSize);
    } else {
      p.rect(x * squareSize, y * squareSize, squareSize, squareSize);
      p.rect(x * squareSize, (y - 1) * squareSize, squareSize, squareSize);
      p.rect((x + 1) * squareSize, (y - 1) * squareSize, squareSize, squareSize);
      p.rect((x + 1) * squareSize, (y - 2) * squareSize, squareSize, squareSize);
    }
  }

  p.drawS = function (x, y, dir) {
    p.noStroke();
    p.fill('#F38630');

    if (dir === 0) {
      p.rect(x * squareSize, y * squareSize, squareSize, squareSize);
      p.rect((x + 1) * squareSize, y * squareSize, squareSize, squareSize);
      p.rect((x + 1) * squareSize, (y - 1) * squareSize, squareSize, squareSize);
      p.rect((x + 2) * squareSize, (y - 1) * squareSize, squareSize, squareSize);
    } else {
      p.rect(x * squareSize, y * squareSize, squareSize, squareSize);
      p.rect(x * squareSize, (y + 1) * squareSize, squareSize, squareSize);
      p.rect((x + 1) * squareSize, (y + 1) * squareSize, squareSize, squareSize);
      p.rect((x + 1) * squareSize, (y + 2) * squareSize, squareSize, squareSize);
    }
  }
};
