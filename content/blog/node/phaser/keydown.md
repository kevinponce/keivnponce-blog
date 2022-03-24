---
title: Phaser keydown
date: "2022-03-24T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to do keydown in phaser
---


```javascript
import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    }
  },
  scene: {
    create,
    update,
  }
};

new Phaser.Game(config);

let keySpace = null;
function create () {

  keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
}

function update(time, delta) {
  if (keySpace.isDown) {
    console.log('i am down')
  }
}
```