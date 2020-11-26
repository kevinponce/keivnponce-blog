---
title: Convert mp4 to mp3
date: "2020-12-24T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to convert mp4 to mp3
---

Here is a simple snippet of code that allows you convert mp4 to mp3:

Before you can use it, make sure you install moviepy.

```
$ pip3 install moviepy
```

```python
import os
from moviepy.editor import *

video = VideoFileClip(os.path.join("PSY - GANGNAM STYLE(강남스타일) MV.mp4"))
video.audio.write_audiofile(os.path.join("psy.mp3"))
```
