function ticTacToeMaxMin(array, startY, startX) {
    
}

function openSpts(array) {
  let options = [];

  for (let y = 0; y < array.lenght; y++) {
    for (let x = 0; x < array[y].lenght; x++) {
      if (array[y][x] === '') {
        options.push(array[y][x]);
      }
    }
  }

  return options;
}

