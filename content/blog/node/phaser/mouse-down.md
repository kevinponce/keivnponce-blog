---
title: Phaser mouse down
date: "2022-03-24T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to use mouse down in Phaser
---


```javascript
import Phaser from "phaser";

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
  scene: {
  	preload,
    create,
    update,
  }
};

new Phaser.Game(config);

function preload () { }


function create () {  
  this.input.on('pointerdown', () => {
    console.log('i am down')
  });
}

function update(time, delta) { }

```