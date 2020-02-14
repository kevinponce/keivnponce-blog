function randomColor(p) {
  const colors = [p.color(105,210,231), p.color(249,212,35), p.color(243,134,48), p.color(255,78,80)];

  return colors[parseInt((colors.length)* Math.random())];
}

export default function(p) {
  const height = 420;
  const width = 700;
  let array = [];
  let i = 0;
  let j = 0;

  p.setup = function() {
    p.createCanvas(width, height);
    p.frameRate(1);

    for (let i = 0; i < 10; i++) {
      array.push({
        value: parseInt(Math.random() * (height - 10)),
        color: randomColor(p)
      });
    }
  };

  p.draw = function() {
    if (i < array.length - 1) {
      if (array[j]['value'] > array[j + 1]['value']) {
        swap(array, j, j + 1);
      }
      j++;

      if (j >= array.length - i - 1) {
        j = 0;
        i++;
      }
    }

    p.background(220);

    const itemWidth = width /  array.length;

    for (let i = 0; i < array.length; i++) {
      const item = array[i];

      p.fill(item['color']);
      p.rect(itemWidth * i, height - item['value'] - 10, itemWidth, item['value']);
    }

    p.fill(255);
    p.rect(itemWidth * j, height - 10, itemWidth, 10);

    p.fill(0);
    p.rect(itemWidth * (j + 1), height - 10, itemWidth, 10);
  };
};


function bubleSort(ar) {
  for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar.length - 1 - i; j++) {

      if (ar[j]['value'] > ar[j + 1]['value']) {
        swap(ar, j, j + 1);
      }
    }
  }
}

function swap(ar, i, j) {
  const temp = ar[i];

  ar[i] = ar[j];
  ar[j] = temp;
}
