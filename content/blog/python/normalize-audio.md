---
title: Normalize audio
date: "2020-11-25T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to normalize audio python
---

Here is a simple snippet of code that allows you normalize audio.


Before you can use it, make sure you install pydub.
```
$ brew install ffmpeg
$ pip install pydub
```

```python
from pydub import AudioSegment, effects  

rawsound = AudioSegment.from_file("test_split3.mp3", "mp3")  
normalizedsound = effects.normalize(rawsound)  
normalizedsound.export("test_split3_normalize.mp3", format="mp3")
```