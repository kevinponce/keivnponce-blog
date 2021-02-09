---
title: Find ellipsis using python
date: "2021-01-28T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to find ellipsis using python.
---

Here is a simple snippet of code that allows you find ellipsis in python.

Before you can use it, make sure you install scikit-image and opencv-python.
```
$ pip install scikit-image
$ pip install opencv-python
```

```python
import cv2 as cv
import numpy as np
from skimage import feature
import math

gray = cv.imread('beerPong1.jpg', cv.IMREAD_GRAYSCALE)
edges = np.uint8(feature.canny(gray, sigma=5) * 255)

_, mask = cv.threshold(edges, 127, 255, cv.THRESH_BINARY)
contours, _ = cv.findContours(mask, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_NONE)
contours = [contour for contour in contours if len(contour) > 15]
radiuses = [cv.fitEllipse(contour)[2] for contour in contours]

canvas = cv.cvtColor(mask, cv.COLOR_GRAY2BGR)
cv.drawContours(canvas, contours, -1, (255, 0, 255), 10)

average_radius = np.mean(radiuses)
active = []

for contour in contours:
  ellipse = cv.fitEllipse(contour) # ((centx,centy), (width,height), angle)
  width, height = ellipse[1]

  if average_radius - 10 < ellipse[2] and average_radius + 10 > ellipse[2]:
    cv.ellipse(canvas, ellipse, (0, 255, 255), 10)
    cv.putText(canvas, str(len(active)), (int(ellipse[0][0] - 10), int(ellipse[0][1])), cv.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 255), 2, cv.LINE_AA)
    active.append(contour)

cv.imwrite('beerPong1_circles.png', canvas)
```
