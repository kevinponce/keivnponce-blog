---
title: Get Peak
date: "2019-09-07T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to get audio peaks in node
---

```
npm install node-audio-peaks --save
```

```javascript
import { getAudioPeaks } from "node-audio-peaks/lib/cjs/index";

let audioPeaks = getAudioPeaks("./public/sampleaudio.mp3");

audioPeaks.subscribe(data => {
  console.log(data.length)
});

```