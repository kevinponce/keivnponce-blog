---
title: Phaser restart
date: "2022-03-24T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to use restart in Phaser
---

```javascript
export default class PlayScene extends Phaser.Scene {
  constructor() {
  	super('PlayScene');
  }

  preload() { }
  create() { }
  update() { }

  gameOver() {
    this.time.addEvent({
      delay: 1000,
      callback: () => {
        this.scene.restart();
      },
      loop: false,
    })
  }
}
```