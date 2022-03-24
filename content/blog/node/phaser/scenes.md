---
title: Phaser scenes
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
  }

  preload() { }
  create() { }
  update() { }
}

```

## index.js
```javascript
import Phaser from "phaser";
import PlayScene from './scenes/PlayScene'

const config = {
  type: Phaser.AUTO,
  height: 600,
  width: 800,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    }
  },
  scene: [PlayScene]
};

new Phaser.Game(config);
```

## Scene commands
```
this.scene.pause()
this.scene.restart();
this.scene.stop()
this.scene.remove()
this.scene.sleep()
this.scene.wake()


this.scene.resume('PlayScene')
this.scene.start('PlayScene')
this.scene.laych("PauseScene");
```