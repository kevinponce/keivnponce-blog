---
title: Python convert wav to mp3
date: "2020-11-16T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to convert wav to mp3 using Python.
---

How to convert wav to mp3 using Python.

Before you can use the script, you must install dependencies:

# Install ffmpeg
## Mac
```
brew install ffmpeg
```

## Linux
```
sudo apt-get install ffmpeg
```

# Install pydub
```
pip install pydub
```

# Script:
```
from pydub import AudioSegment

AudioSegment.from_wav("example.wav").export("example.mp3", format="mp3")
```
