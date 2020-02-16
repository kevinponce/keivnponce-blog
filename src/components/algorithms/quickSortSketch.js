const partitionColor = '#69d2e7';
const defaultColor = '#f9d423';
const activeColor = '#f38530';

let arrayColors = [];

export default function(p) {
  const height = 420;
  const width = 700;
  let array = [];

  p.setup = function() {
    p.createCanvas(width, height);

    for (let i = 0; i < 100; i++) {
      array.push(parseInt(Math.random() * height))
      arrayColors.push(defaultColor);
    }

    quickSort(array, 0, array.length - 1);
  };

  p.draw = function() {
    p.background(220);

    const itemWidth = width / array.length;

    for (let i = 0; i < array.length; i++) {
      p.fill(arrayColors[i]);
      p.rect(itemWidth * i, height - array[i], itemWidth, array[i]);
    }
  };
};

async function quickSort(arr, left, right) {
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = await partition(arr, pivot, left, right);
    arrayColors[partitionIndex] = defaultColor;
    
   //sort left and right
   await Promise.all([
      quickSort(arr, left, partitionIndex - 1),
      quickSort(arr, partitionIndex + 1, right)
    ]);
  }
  return arr;
}
     
async function partition(arr, pivot, left, right) {
  for (let i = left; i < right; i++) {
    arrayColors[i] = activeColor;
  }

  let pivotValue = arr[pivot];
  let partitionIndex = left;

  arrayColors[partitionIndex] = partitionColor;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, partitionIndex);

      arrayColors[partitionIndex] = defaultColor;
      partitionIndex++;
      arrayColors[partitionIndex] = partitionColor;
    }
  }

  await swap(arr, right, partitionIndex);

  for (let i = left; i < right; i++) {
    if (i !== partitionIndex) {
      arrayColors[partitionIndex] = defaultColor;
    }
  }

  return partitionIndex;
}

async function swap(arr, i, j) {
  await sleep(500);
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
