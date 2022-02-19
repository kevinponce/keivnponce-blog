---
title: Capture partial screen python
date: "2021-05-21T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to capture partial monitor python.
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
  # Get information of monitor 2
  monitor_number = 1
  mon = sct.monitors[monitor_number]

  # The screen part to capture
  monitor = {
    "top": mon["top"] + 100,  # 100px from the top
    "left": mon["left"] + 100,  # 100px from the left
    "width": 160,
    "height": 135,
    "mon": monitor_number,
  }

  while 1:
    sct_img = sct.grab(monitor)

    cv2.imshow('test', np.array(sct_img))

    if cv2.waitKey(25) & 0xFF == ord('q'):
      cv2.destroyAllWindows()
      break
```