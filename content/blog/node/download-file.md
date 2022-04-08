---
title: Download file
date: "2019-09-07T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to download a file using node
---

```javascript
import axios from 'axios';
import fs from 'fs';

axios({
    method: "get",
    url: "https://storage.googleapis.com/vocodes-public/tts_inference_output/2/a/9/vocodes_2a982446-f0a5-4bef-9893-e609c228a8e8.wav",
    responseType: "stream"
}).then(function (response) {
    response.data.pipe(fs.createWriteStream("test.wav"));
});
```