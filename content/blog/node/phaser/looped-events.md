---
title: Phaser time event
date: "2022-03-24T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to use timed event in Phaser
---

```javascript
let timeEvent = this.time.addEvent({
  delay: 1000,
  callback: () => {
    console.log('1')
    timeEvent.remove(); // stop event
  },
  loop: true,
})
```