import Cell from './cell';

const islandColor = '#6AF087';

export default function(p) {
  const height = 420;
  const width = 420;
  let size = 10;
  let array = new Array(size);
  const itemWidth = width / array.length;

  p.setup = function() {
    p.createCanvas(width, height);

    let islands = buildIslandsArray(size);

    for (let y = 0; y < array.length; y++) {
      array[y] = new Array(size);

      for (let x = 0; x < array[y].length; x++) {
        const island = islands.indexOf((y + 1)* (x + 1)) !== -1;
        array[y][x] = new Cell(island);
      }
    }

    floodFill(array, size / 2, size / 2);
  };

  p.draw = function() {
    p.background(220);


    for (let y = 0; y < array.length; y++) {
      for (let x = 0; x < array[y].length; x++) {
        p.fill(array[y][x].color());
        p.rect(itemWidth * x, itemWidth * y, itemWidth, itemWidth);

        if (array[y][x].island) {
          p.drawIsland(x, y);
        }
      }
    }
  };

  p.drawIsland = function(x, y) {
    const centerX = itemWidth * x + (itemWidth / 2);
    const centerY = itemWidth * y+ (itemWidth / 2);

    p.push()
    p.ellipseMode(p.CENTER);
    p.rectMode(p.CENTER);

    p.fill(islandColor);
    p.translate(centerX, centerY);
    p.ellipse(0, 0, itemWidth * 0.75, itemWidth * 0.75);
    p.pop();
  }
};

function buildIslandsArray(size) {
  let islands = new Array(size);

  // makes array with sequential values to make sure we get enough numbers
  let availLocations = new Array(size * size);
  for (let i = 0; i < availLocations.length; i++) {
    availLocations[i] = i;
  }

  for (let i = 0; i < islands.length; i++) {
    let rand = parseInt(Math.random() * availLocations.length);
    let loc = availLocations.splice(rand, 1)[0];

    islands[i] = loc;
  }

  return islands;
}

async function floodFill(ar, x, y) {
  if (y < 0 || ar.length <= y) return false;
  if (x < 0 || ar[y].length <= x) return false;
  if (ar[y][x].touched) return true;
  if (ar[y][x].island) return true;

  ar[y][x].touchCell();
  await sleep(500);

  await floodFill(ar, x, y - 1);
  await floodFill(ar, x, y + 1);
  await floodFill(ar, x - 1, y);
  await floodFill(ar, x + 1, y);
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
