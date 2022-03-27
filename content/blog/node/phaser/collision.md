---
title: Phaser collisions
date: "2022-03-24T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to use collisions in Phaser
---

```javascript
import Phaser from 'phaser';

export default class CollideScene extends Phaser.Scene {
  constructor(config) {
    super('CollideScene');

    this.guy = null;
    this.platform = null;
    this.trap = null;
  }

  preload() {
    this.load.image('guy', 'assets/guy.png');
    this.load.image('platform', 'assets/platform.png');
  }
  create() {
    this.guy = this.physics.add.sprite(10, 10, 'guy').setOrigin(0, 1);
    this.guy.body.gravity.y = 400;
    this.guy.setCollideWorldBounds(true);

    this.platform = this.physics.add.sprite(0, 200, 'platform').setImmovable(true).setOrigin(0, 1);

    this.trap = this.physics.add.sprite(20, 100, 'guy').setOrigin(0, 1);


    this.pipes = this.physics.add.group();
    for (let i = 0; i < 4; i++) {
      this.pipes.create(0, 0, 'pipe').setImmovable(true).setOrigin(0, 1);
    }

    this.physics.add.collider(this.guy, this.platform, null, null, this);
    this.physics.add.collider(this.guy, this.trap, this.trapCollision, null, this);
    this.physics.add.collider(this.guy, this.pipes, this.trapCollision, null, this);
  }

  update() { }

  trapCollision(guy, trap) {
    guy.setTint(0x00FF00);
    trap.setTint(0xFF0000);
  }
}
```