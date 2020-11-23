---
title: Python filter color
date: "2019-08-03T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: Here is a snippet of python code to filter color
---

Here is a simple python snippet to filter color of a webcam.

First you need install cv and numpy.

```
$ pip3 install cv2
$ pip3 install numpy
```

Now create the following file:

you might need to change the number on line 3 to use the corrent webcam if you have more than one!

```python
import cv2
import numpy as np

cap = cv2.VideoCapture(0) # 

while(1):
    _, frame = cap.read()
    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    low = np.array([25, 52, 72])
    upper = np.array([102, 255, 255])
    
    mask = cv2.inRange(hsv, low, upper)
    res = cv2.bitwise_and(frame,frame, mask= mask)

    cv2.imshow('frame',frame)
    cv2.imshow('mask',mask)
    cv2.imshow('res',res)
    
    k = cv2.waitKey(5) & 0xFF
    if k == 27:
        break

cv2.destroyAllWindows()
cap.release()
```

The tricky part of this, is finding the upper and lower bounds...
For me it was more of an art than a science...

```python
# red
low = np.array([161, 155, 84])
upper = np.array([179, 255, 255])

# blue
low = np.array([94, 80, 2])
upper = np.array([126, 255, 255])


# green
low = np.array([25, 52, 72])
upper = np.array([102, 255, 255])
```

Voila.