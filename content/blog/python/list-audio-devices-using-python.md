---
title: List audio devices using python
date: "2021-01-31T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to list audio devices using python.
---

Here is a simple snippet of code that allows you to list audio devices .

Before you can use it, make sure you install portaudio and pyaudio.
```
$ brew install portaudio
$ pip install pyaudio
```

```python
import pyaudio

audio = pyaudio.PyAudio()

info = audio.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')
for i in range(0, numdevices):
        if (audio.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print("Input Device id ", i, " - ", audio.get_device_info_by_host_api_device_index(0, i).get('name'))
```
