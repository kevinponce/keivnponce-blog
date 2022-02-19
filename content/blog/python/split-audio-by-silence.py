---
title: Split audio by silence
date: "2020-11-25T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to split audio by silence in python
---

Here is a simple snippet of code that allows you split an audio file by silence.


Before you can use it, make sure you install pydub.
```
$ brew install ffmpeg
$ pip install pydub
```

```python
# mac: brew install ffmpeg
# linux: sudo apt-get install ffmpeg
# pip install pydub

# Import the AudioSegment class for processing audio
from pydub import AudioSegment

def detect_next_silence(sound, silence_threshold=-50.0, chunk_size=10, trim_ms=0, number_of_chunk_threshold=10):
    silence_trim_ms = trim_ms

    assert chunk_size > 0 # to avoid infinite loop
    while trim_ms < len(sound):
        # skips sounds that is too loud
        while sound[trim_ms:trim_ms+chunk_size].dBFS >= silence_threshold and trim_ms < len(sound):
            trim_ms += chunk_size

        silence_trim_ms = trim_ms
        silence_count = 0
        while sound[trim_ms:trim_ms+chunk_size].dBFS < silence_threshold and trim_ms < len(sound):
            silence_count += 1
            trim_ms += chunk_size

            if silence_count >= number_of_chunk_threshold:
              return silence_trim_ms

    return trim_ms

def detect_leading_silence(sound, silence_threshold=-50.0, chunk_size=10, trim_ms=0):
    assert chunk_size > 0 # to avoid infinite loop
    while sound[trim_ms:trim_ms+chunk_size].dBFS < silence_threshold and trim_ms < len(sound):
        trim_ms += chunk_size

    return trim_ms

# Define a function to normalize a chunk to a target amplitude.
def match_target_amplitude(aChunk, target_dBFS):
    ''' Normalize given audio chunk '''
    change_in_dBFS = target_dBFS - aChunk.dBFS
    return aChunk.apply_gain(change_in_dBFS)

def split_sound(sound, chunk_size=10, trim_ms=0):
    sounds = []
    while trim_ms < len(sound):
        start_silence_ms = detect_next_silence(sound, trim_ms=trim_ms, chunk_size=chunk_size, silence_threshold=-60.0)
        sound_start = detect_leading_silence(sound, trim_ms=start_silence_ms, chunk_size=chunk_size, silence_threshold=-50.0)
        sound_end = detect_next_silence(sound, trim_ms=sound_start, chunk_size=chunk_size, silence_threshold=-60.0)
        trim_ms = sound_end

        if sound_start == sound_end:
            return sounds

        sounds.append(sound[sound_start:sound_end])
    return sounds


# Load your audio.
sound = AudioSegment.from_mp3("test_split3.mp3")

for i, new_sound in enumerate(split_sound(sound)):
    new_sound.export(f'new_sound{i}.mp3', format="mp3")
```