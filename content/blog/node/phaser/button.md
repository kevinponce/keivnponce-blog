---
title: Phaser Button
date: "2022-03-24T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to use button in Phaser
---

```javascript
import Phaser from 'phaser';

export default class PlayScene extends Phaser.Scene {
  constructor() {
    super('PlayScene');
  }

  preload() {
    this.add.image(0, 0, 'button').setOrigin(0, 0);
  }

  create() {
    let button = this.physics.add.sprite(this.initPosition.x, this.initPosition.y, 'button').setOrigin(0,0).setInteractive();

    button.on('pointerdown', () => {
      console.log('pressed')
    });
  }
  update() { }
}

```