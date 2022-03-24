---
title: Phaser Pause
date: "2022-03-24T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to pause in Phaser
---

```javascript
import Phaser from 'phaser';

export default class PlayScene extends Phaser.Scene {
  constructor() {
    super('PlayScene');
  }

  preload() { }
  create() {
    this.events.on('resume', () => {
      this.physics.resume();
    });
  }
  update() { }


  // call when want to pause
  pause() {
    this.physics.pause();
    this.scene.pause()
    this.scene.lauch('PauseScreen');
  }
}

```

```javascript
export default class PauseScreen extends Phaser.Scene {
  constructor() {
    super('PauseScreen');
  }

  preload() { }
  create() { }
  update() { }


  resume() {
    this.scene.stop();
    this.scene.resume('PlayScene')
  }
}
```