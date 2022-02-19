---
title: Python convert wav or mp3 to flac
date: "2020-11-26T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to convert wav or mp3 to flac using Python.
---

How to convert wav or mp3 to flac using Python.

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
```python
from os.path import splitext
from pydub import AudioSegment

def wav_to_flac(wav_path):
    flac_path = "%s.flac" % splitext(wav_path)[0]
    song = AudioSegment.from_wav(wav_path)
    song.export(flac_path, format = "flac")

def mp3_to_flac(mp3_path):
    flac_path = "%s.flac" % splitext(mp3_path)[0]
    song = AudioSegment.from_mp3(mp3_path)
    song.export(flac_path, format = "flac")

mp3_to_flac("test_split3.mp3")
```
