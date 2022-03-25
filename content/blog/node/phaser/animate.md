---
title: Phaser Animate
date: "2022-03-24T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to animate in Phaser
---

```javascript
this.load.spritesheet('bird', 'assets/sprite.png', { frameWidth: 16, frameHeight: 16});

import Phaser from 'phaser';

export default class PlayScene extends Phaser.Scene {
  constructor() {
    super('PlayScene');
  }

  preload() {
  	this.load.spritesheet('sprite', 'assets/sprite.png', { frameWidth: 16, frameHeight: 16});
  }

  create() {
    this.sprite = this.physics.add.sprite(100, 100, 'sprite').setScale(3).setFlipX(true);
    this.sprite.body.gravity.y = 400;
    this.sprite.setCollideWorldBounds(true);

    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('bird', { start: 9, end: 16 }),
      frameRate: 8,
      repeat: -1,
    })

    this.sprite.play('run')
  }

  update() { }
}

```