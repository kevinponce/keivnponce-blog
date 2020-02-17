/*
function randomColor(p) {
  const colors = [p.color(105,210,231), p.color(249,212,35), p.color(243,134,48), p.color(255,78,80)];

  return colors[parseInt((colors.length)* Math.random())];
}

export default function(p) {
  const height = 420;
  const width = 700;
  let array = [];
  let path = []
  let count = 0

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
    p.background(220);

    const padding = 10;
    const itemWidth = calcItemWidth(array, width, padding);
    drawBar(p, array, (padding / 2), itemWidth, padding, height);
    
    if (path) {
      array = splitAr(array, path);
      path = nextPath(array, path);
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
  for (let i = 0; i < ar.length; i++) {
    if (Array.isArray(ar[i])) {
      x = drawBar(p, ar[i], (x + padding), itemWidth, padding, height);
    } else {
      let item = ar[i];

      p.fill(item['color']);
      p.rect(x, height - item['value'], itemWidth, item['value']);
      x += itemWidth;
    }
  }

  return x;
}

function numberOfItems(ar) {
  let count = 0;

  for (let i = 0; i < ar.length; i++) {
    if (Array.isArray(ar[i])) {
      count += numberOfItems(ar[i]);
    } else {
      count++;
    }
  }

  return count;
}

function numberOfPadding(ar) {
  let count = 1;

  for (let i = 0; i < ar.length; i++) {
    if (Array.isArray(ar[i])) {
      count += numberOfPadding(ar[i]);
    }
  }

  return count;
}

function calcItemWidth(ar, canvasWidth, padding) {
  return (canvasWidth - (numberOfPadding(ar) * padding)) / numberOfItems(ar);
}

function mergeSort(ar) {
  if (ar.length <= 1) {
    return ar;
  }

  const middle = parseInt(ar.length / 2);
  const ar1 = mergeSort(ar.slice(0, middle))
  const ar2 = mergeSort(ar.slice(middle))
  
  return mergeArray(ar1, ar2)
}

function mergeArray(ar1, ar2) {
  let newArray = [];
  let ar1I = 0;
  let ar2I = 0;

  while(ar1.length > ar1I || ar2.length > ar2I) {
    if (ar1.length <= ar1I) {
      newArray.push(ar2[ar2I]);
      ar2I++;
    } else if (ar2.length <= ar2I) {
      newArray.push(ar1[ar1I]);
      ar1I++;
    } else if (ar1[ar1I] < ar2[ar2I]) {
      newArray.push(ar1[ar1I]);
      ar1I++;
    } else {
      newArray.push(ar2[ar2I]);
      ar2I++;
    }
  }

  return newArray;
}
*/
import React, { Component } from "react";

export default class App extends Component {
 
  render() {
    return <div>test</div>;
  }
}
