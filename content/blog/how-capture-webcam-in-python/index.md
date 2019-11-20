---
title: How capture webcam in python
date: "2019-08-03T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How capture webcam in python to use in machine learning, or your next project.
---

Here is a simple tutorial on how to capture your webcam in python.

First you need install cv2.

```
$ pip3 install cv2
```

Now create the following file:
```python
import cv2
import numpy as np

cap = cv2.VideoCapture(0)

fourcc = cv2.VideoWriter_fourcc('M','J','P','G')
out = cv2.VideoWriter()
succes = out.open('output.avi',fourcc, 15.0, (1280,720),True)

while True:
  ret, frame = cap.read()
  cv2.imshow('frame', frame)
  out.write(frame)

  if cv2.waitKey(1) & 0xff == ord('q'):
    break

cap.release();
out.release();

cv2.destroyAllWindows()
```

Voila.