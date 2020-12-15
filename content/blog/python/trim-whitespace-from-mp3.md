---
title: Python trim whitespace from mp3
date: "2020-11-16T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to trim whitespace from mp3 file using Python.
---

How to trim whitespace from mp3 file using Python.

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
# mac: brew install ffmpeg
# linux: sudo apt-get install ffmpeg
# pip install pydub
from pydub import AudioSegment

def detect_leading_silence(sound, silence_threshold=-50.0, chunk_size=10):
    '''
    sound is a pydub.AudioSegment
    silence_threshold in dB
    chunk_size in ms

    iterate over chunks until you find the first one with sound
    '''
    trim_ms = 0 # ms

    assert chunk_size > 0 # to avoid infinite loop
    while sound[trim_ms:trim_ms+chunk_size].dBFS < silence_threshold and trim_ms < len(sound):
        trim_ms += chunk_size

    return trim_ms

# 16 KB
sound = AudioSegment.from_file("example.mp3", format="mp3")

start_trim = detect_leading_silence(sound, silence_threshold=-40.0)
end_trim = detect_leading_silence(sound.reverse(), silence_threshold=-40.0)
duration = len(sound)
trimmed_sound = sound[start_trim:duration-end_trim]

trimmed_sound.export("example2.mp3", format="mp3")
```
