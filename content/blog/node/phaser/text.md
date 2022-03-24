---
title: Phaser text
date: "2022-03-24T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to use text in Phaser
---


```javascript
import Phaser from 'phaser';

export default class TextScene extends Phaser.Scene {
  constructor(config) {
    super('TextScene');

    this.score = 0;
    this.scoreText = null;
  }

  preload() { }

  create() {
    this.score = 0;
    this.scoreText = this.add.text(16, 16, `Score: ${this.score}`, { fontSize: '32px', fill: '#fff' });
  }

  update() { }

  increaseScore() {
    this.score++
    this.scoreText.setText(`Score: ${this.score}`);
  }
}
```