---
title: Animate Audio Bar Graph
date: "2022-04-06T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to animate audio bar graph
---

```javascript
let sound, amplitude, waveform, count;
let numberOfPeaks = 100;

function preload() {
  sound = loadSound('static/test.wav');
}

function setup() {
  createCanvas(720, 400);

  waveform = sound.getPeaks(numberOfPeaks);
  count = 0;
}

function draw() {
  background(255);
  fill(0);
  stroke(0);

  for (var i = 0; i < map(count, 0, waveform.length, 0, waveform.length); i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = height/2;
    var h = map(waveform[i], -1, 1, height, 0);
    line(x , height/2, x + 0, h);
    lastX = x
  }

  count += 1;
}
```