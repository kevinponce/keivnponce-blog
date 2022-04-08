---
title: Animate Audio Line Graph
date: "2022-04-06T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to animate audio line graph
---

```javascript
let sound, count, posx;
let numberOfPeaks = 1000;

function preload() {
  sound = loadSound('static/test.wav');
  sound = loadSound('static/Snare-707.mp3');
}

function setup() {
  createCanvas(720, 400);

  console.log(sound.duration())

  posx = Float32Array.from({ length: numberOfPeaks }, (_, i) => map(i, 0, numberOfPeaks, 0, width));
  count = 0;
}

function draw() {
  background(255);
  fill(0);
  stroke(0);
  var waveform = sound.getPeaks(numberOfPeaks);

  for (let i = 0; i < map(count, 0, numberOfPeaks, 0, numberOfPeaks); i++) {
    y1 = map(waveform[i], -1, 1, height, 0);
    y2 = map(waveform[i + 1], -1, 1, height, 0);
    x1 = map(posx[i], 0, width, 0, width);
    x2 = map(posx[i+1], 0, width, 0, width);

    strokeWeight(2);
    stroke(100);
    line(x1, y1, x2, y2);
  }

  ellipse(posx[count], fy(data[count]), 4, 4);

  count += 30;
}
```