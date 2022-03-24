---
title: Phaser move
date: "2022-03-24T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to use move in Phaser
---

```javascript
import Phaser from 'phaser';

export default class MoveScene extends Phaser.Scene {
  constructor(config) {
    super('MoveScene');

    this.config = config;
    this.guy = null;

    // controlls
    this.keyDown = null;
    this.keyUp = null;
    this.keyRight = null;
    this.keyLeft = null;
  }

  preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('guy', 'assets/guy.png');
  }

  create() {
    this.createBG();
    this.createGuy();
    this.createControls();
  }

  update() {
    this.updateControls();
  }

  createBG() {
    this.add.image(0, 0, 'sky').setOrigin(0, 0);
  }

  createGuy() {
    this.guy = this.physics.add.sprite(0, 0, 'guy')
  }

  createControls() {
    this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  }

  updateControls () {
    let yVelocity = 0;
    let xVelocity = 0;

    if (this.keyDown.isDown) {
      yVelocity = 100
    } else if (this.keyUp.isDown) {
      yVelocity = -100
    }

    if (this.keyLeft.isDown) {
      xVelocity = -100
    } else if (this.keyRight.isDown) {
      xVelocity = 100
    }

    this.guy.body.velocity.y = yVelocity;
    this.guy.body.velocity.x = xVelocity;
  }
}
```