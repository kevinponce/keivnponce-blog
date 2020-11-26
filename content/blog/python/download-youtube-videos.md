---
title: Download youtube videos
date: "2020-12-24T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to download youtube videos using python
---

Here is a simple snippet of code that allows you download youtube video.

Before you can use it, make sure you install pytube.
I could not get `pip3 insteadd pytube` to work, so use the following:
```
$ python -m pip install git+https://github.com/nficano/pytube
```

```python
from pytube import YouTube

yt = YouTube('http://youtube.com/watch?v=9bZkp7q19f0')

print(yt.streams)

print("Title: ", yt.title)
print("Number of views: ", yt.views)
print("Length of video: ", yt.length, "seconds")
print("Description: ", yt.description)
print("Ratings: ", yt.rating)

yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first().download()
```

Voila.
