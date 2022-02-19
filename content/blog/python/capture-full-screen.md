---
title: Capture full screen python
date: "2021-05-21T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to capture full monitor python.
---

Before you can use it, make sure you install:
```
$ pip3 install opencv-python
$ pip3 install pillow
$ pip3 install numpy
$ pip3 install mss
```

```
# pip3 install opencv-python
# pip3 install pillow
# pip3 install numpy
# pip3 install mss

import numpy as np
import cv2
from PIL import Image

import mss
import mss.tools

with mss.mss() as sct:
  # Use the 1st monitor
  monitor = sct.monitors[1]

  while 1:
    sct_img = sct.grab(monitor)

    cv2.imshow('test', np.array(sct_img))

    if cv2.waitKey(25) & 0xFF == ord('q'):
      cv2.destroyAllWindows()
      break
```
