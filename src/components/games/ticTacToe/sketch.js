import TicTacToe, { X, O } from './game';

export default function(p) {
  const height = 700;
  const width = 700;
  const lineWidth = 10;
  const size = 3;
  const squareSize = width / size;
  const backgroundColor = '#ffffff';
  const colorX = '#69d2e7';
  const colorO = '#f9d523';

  let ticTacToe;

  p.setup = function() {
    p.createCanvas(width, height);
    ticTacToe = new TicTacToe(size);
  };

  p.draw = function() {
    p.background(backgroundColor);

    p.drawLines();

    if (ticTacToe) {
      const board = ticTacToe.board;

      for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
          if (board[y][x] === X) {
            p.drawX(x, y);
          } else if (board[y][x] === O) {
            p.drawO(x, y);
          }
        }
      }
    }
  };

  p.drawLines = function() {
    p.fill(0);
    for (let i = 1; i < ticTacToe.board.length; i++) {
      p.rect(squareSize * i - (lineWidth / 2), 0, lineWidth, height);
      p.rect(0, squareSize * i - (lineWidth / 2), width, lineWidth);
    }
  }

  p.drawX = function(x, y) {
    const centerX = squareSize * x + (squareSize / 2);
    const centerY = squareSize * y+ (squareSize / 2);

    p.push()
    p.fill(colorX);
    p.noStroke();
    p.rectMode(p.CENTER);
    p.angleMode(p.DEGREES);

    p.translate(centerX, centerY);
    p.rotate(45);
    p.rect(0, 0, lineWidth * 2, squareSize);

    p.rotate(90);
    p.rect(0, 0, lineWidth * 2, squareSize);
    p.pop();
  }

  p.drawO = function(x, y) {
    const centerX = squareSize * x + (squareSize / 2);
    const centerY = squareSize * y+ (squareSize / 2);

    p.push()
    p.ellipseMode(p.CENTER);
    p.rectMode(p.CENTER);

    // DOUGHNUT
    p.fill(colorO);
    p.stroke(240,230,140); 
    p.ellipse(centerX, centerY, squareSize * 0.75, squareSize * 0.75);

    // DOUGHNUT HOLE
    p.fill(backgroundColor);
    p.stroke(240,230,140);
    p.ellipse(centerX, centerY, squareSize / 2, squareSize / 2);
    p.pop();
  }

  p.mouseClicked = function(event) {
    const { layerX, layerY } = event;
    let x = -1;
    let y = -1;

    for (let i = 0; i < ticTacToe.board.length; i++) {
      const inner = i * squareSize;
      const outter = (i + 1) * squareSize;

      if (inner <= layerX && layerX <= outter) {
        x = i;
      }

      if (inner <= layerY && layerY <= outter) {
        y = i;
      }
    }

    if (x === -1 || y === -1) {
      return false;
    }

    ticTacToe.place(x, y);
    if (ticTacToe.gameOver) {
      if (ticTacToe.winner) {
        alert(`Player ${ticTacToe.turn} Won`)
      } else {
        alert('Game Over')
      }
    }
  }
};
