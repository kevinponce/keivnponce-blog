/*function randomColor(p) {
  const colors = [p.color(105,210,231), p.color(249,212,35), p.color(243,134,48), p.color(255,78,80)];

  return colors[parseInt((colors.length)* Math.random())];
}

let animations = [];
let mem = [];

export default function(p) {
  const height = 1720;
  const width = 700;
  let array = [];
  let path = []
  let count = 0

  p.setup = function() {
    p.createCanvas(width, height);
    p.frameRate(1);

    for (let i = 0; i < 10; i++) {
      array.push(parseInt(Math.random() * 10));
    }

    console.log(JSON.stringify(array.slice(0)))

    animations = [array.slice(0)];

    mergeSort(array)
  };

  p.draw = function() {
    p.background(220);

    const padding = 10;
    const itemWidth = 30;

    
    for (let j = 0; j < mem.length; j++) {
      for (let i = 0; i < mem[j].length; i++) {
        //p.fill(item['color']);
        // p.rect(itemWidth * i, height - array[i], itemWidth, array[i]);
        p.text(mem[j][i], i * itemWidth, j * itemWidth, itemWidth, itemWidth);
      }
    }
  };
};

function splitAr(ar, path) {
  if (ar.length === 1) {
    return ar;
  }

  if (path.length <= 0) {
    const middle = ar.length / 2;

    return [
      ar.slice(0, middle),
      ar.slice(middle)
    ];
  }

  ar[path[0]] = splitAr(ar[path[0]], path.slice(1));

  return ar;
}

function nextPath(ar, path) {
  let inc = false;

  if (path.length === 0) {
    if (ar.length === 0) {
      return []
    }

    return [0]
  }


  path[path.length - 1] += 1;
  if (pathIsArray(ar, path)) {
    return path;
  }

  path[path.length - 1] = 0;

  for (let i = path.length - 2; i >= 0; i--) {
    path[i] += 1;
    if (pathIsArray(ar, path)) {
      return path;
    }

    path[i] = 0;
  }

  path.push(0);

  if (pathIsArray(ar, path)) {
    return path;
  }

  return undefined;

  return path;
}

function pathIsArray(ar, path) {
  if (!Array.isArray(ar)) {
    return false;
  }

  for (let i = 0; i < path.length; i++) {
    if (!ar[path[i]]) {
      return false
    }

    ar = ar[path[i]];
  }

  return Array.isArray(ar);
}

function drawBar(p, ar, x, itemWidth, padding, height) {
  for (let i = 0; i < animations[animations.length - 1].length; i++) {
    if (Array.isArray(ar[i])) {
      x = drawBar(p, ar[i], (x + padding), itemWidth, padding, height);
    } else {
      //p.fill(item['color']);
      p.rect(x, height - ar[i], itemWidth, ar[i]);
      x += itemWidth;
    }
  }

  return x;
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function mergeSort(ar, mem) {
  if (ar.length <= 1) {
    return ar;
  }

  // animations.pop();
  const middle = parseInt(ar.length / 2);
  mem.push(ar.slice(0, middle))
  // animations.push(ar.slice(0, middle));

  console.log(JSON.stringify(animations))

  const [ar1, mem1] = await mergeSort(ar.slice(0, middle))
  // animations.pop();
  // animations.push(ar.slice(middle));
  mem.push(ar.slice(middle))

  console.log(JSON.stringify(animations))

  const [ar2, mem2] = await mergeSort(ar.slice(middle))

  await sleep(500);
  
  const newArray = await mergeArray(ar1, ar2);
  
  // animations.pop();
  animations.push(newArray);
  // console.log(JSON.stringify(animations.slice(0)))
  await sleep(500);
  return [newArray, mem];
}

async function mergeArray (ar1, ar2) {
  let newArray = [];
  let ar1I = 0;
  let ar2I = 0;

  while(ar1.length > ar1I && ar2.length > ar2I) {
    if (ar1[ar1I] < ar2[ar2I]) {
      newArray.push(ar1[ar1I]);
      ar1I++;
    } else {
      newArray.push(ar2[ar2I]);
      ar2I++;
    }
  }

  while (ar2.length > ar2I) {
    newArray.push(ar2[ar2I]);
    ar2I++;
  }

  while (ar1.length > ar1I) {
    newArray.push(ar1[ar1I]);
    ar1I++;
  }

  return newArray;
}


// mergeSort([2, 5, 1, 7, 4, 9])
*/
import React, { Component } from "react";

export default class App extends Component {
 
  render() {
    return <div>test</div>;
  }
}

