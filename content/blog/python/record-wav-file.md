---
title: Python record wav file
date: "2020-11-16T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to record wav file using Python.
---

How to record wav file using Python.

Before you can use the script, you must install dependencies:

# Install ffmpeg
## Mac
```
brew install portaudio
```

# Install pyaudio
```
pip install pyaudio
```

# Script:
```
# brew install portaudio
# pip install pyaudio

import pyaudio
import wave

CHUNK = 1024
WIDTH = 2
CHANNELS = 2
RATE = 44100
RECORD_SECONDS = 5
FORMAT = pyaudio.paInt16

p = pyaudio.PyAudio()

frames = []
stream = p.open(format=p.get_format_from_width(WIDTH),
                channels=CHANNELS,
                rate=RATE,
                input=True,
                output=False,
                frames_per_buffer=CHUNK)

print("* recording")

for i in range(0, int(RATE / CHUNK * RECORD_SECONDS)):
  data = stream.read(CHUNK)  #read audio stream
  frames.append(data)

print("* done")

stream.stop_stream()
stream.close()

p.terminate()

wf = wave.open('kevin.wav', 'wb')
wf.setnchannels(CHANNELS)
wf.setsampwidth(p.get_sample_size(FORMAT))
wf.setframerate(RATE)
wf.writeframes(b''.join(frames))
wf.close()
```
