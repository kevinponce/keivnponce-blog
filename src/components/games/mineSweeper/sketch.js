import MineSweeper from './game';

export default function(p) {
  const height = 700;
  const width = 700;
  const size = 20;
  const squareSize = width / size;
  const backgroundColor = '#ffffff';
  const defaultColor = '#6AF087';
  const default2Color = '#23D74B';
  const mineColor = '#ff4e50';
  const dirtColor = '#68623B';
  const dirt2Color = '#807142';
  const fontColor = '#ff4e50';

  let mineSweeper;

  p.setup = function() {
    p.createCanvas(width, height);
    mineSweeper = new MineSweeper(size, size);
  };

  p.draw = function() {
    p.background(backgroundColor);

    if (mineSweeper) {
      const { board } = mineSweeper;

      for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
          const cell = board[y][x]

          p.noStroke();
          if (cell.show && cell.value === 0) {
            if (x % 2 === 0) {
              if (y % 2 === 0) {
                p.fill(dirt2Color);
              } else {
                p.fill(dirtColor);
              }
            } else {
              if (y % 2 === 0) {
                p.fill(dirtColor);
              } else {
                p.fill(dirt2Color);
              }
            }
          } else {
            if (x % 2 === 0) {
              if (y % 2 === 0) {
                p.fill(default2Color);
              } else {
                p.fill(defaultColor);
              }
            } else {
              if (y % 2 === 0) {
                p.fill(defaultColor);
              } else {
                p.fill(default2Color);
              }
            }
          }

          p.rect(x * squareSize, y * squareSize, squareSize, squareSize);

          if (cell.show) {
            if (cell.isMine()) {
              p.drawMine(x, y);
            } else if (cell.value !== 0) {
              p.fill(0);
              p.textAlign(p.CENTER, p.CENTER);
              p.textSize(20);
              p.text(cell.value, x * squareSize + squareSize / 2, y * squareSize + squareSize / 2);
            }
          }
        }
      }

      if (mineSweeper.gameOver) {
        let message = 'You lost...';

        if (mineSweeper.won) {
          message = 'You won!';
        }

        p.push()
        p.fill(fontColor); 
        p.rectMode(p.CENTER);
        p.textSize(50);
        p.textAlign(p.CENTER, p.CENTER);
        p.text(message, width / 2, height / 2);
        p.pop();
      }
    }
  };

  p.drawMine = function(x, y) {
    const centerX = squareSize * x + (squareSize / 2);
    const centerY = squareSize * y+ (squareSize / 2);

    p.push()
    p.ellipseMode(p.CENTER);
    p.rectMode(p.CENTER);

    p.fill(mineColor);
    //p.stroke(240,230,140);
    p.translate(centerX, centerY);
    p.ellipse(0, 0, squareSize * 0.75, squareSize * 0.75);
    p.pop();
  }

  p.mouseClicked = function(event) {
    let x = -1;
    let y = -1;

    for (let i = 0; i < mineSweeper.board.length; i++) {
      const inner = i * squareSize;
      const outter = (i + 1) * squareSize;

      if (inner <= p.mouseX && p.mouseX <= outter) {
        x = i;
      }

      if (inner <= p.mouseY && p.mouseY <= outter) {
        y = i;
      }
    }

    if (x === -1 || y === -1) {
      return false;
    }

    mineSweeper.place(x, y);
    
  }
};
