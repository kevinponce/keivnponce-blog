---
title: Phaser tint
date: "2022-03-24T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to use scenes in Phaser
---

## scenes/PlayScene.js
```javascript
import Phaser from 'phaser';

export default class PlayScene extends Phaser.Scene {
  constructor() {
    super('PlayScene');

    this.plauer = null;
  }

  preload() {
  	this.load.image('player', 'assets/player.png');
  }

  create() {
  	this.player = this.physics.add.sprite(10, 10, 'player').setOrigin(0, 1);
  }

  update() {
  	this.player.setTint(0xFF0000);
  }
}

```