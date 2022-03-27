---
title: Phaser debug
date: "2022-03-24T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to debug in Phaser
---


```javascript
import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    }
  },
  scene: { preload },
};

new Phaser.Game(config);

function preload () { }

```