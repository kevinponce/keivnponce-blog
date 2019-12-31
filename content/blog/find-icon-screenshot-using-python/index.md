---
title: Find icon screenshot using python
date: "2019-12-26T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to take a screenshot and find an icon using python.
---

Here is a simple snippet of code that takes a screenshot and then searches for an image in the screenshot.

Before you can use it, make sure you install pyautogui.
```
$ pip install pyautogui
$ pip install np
$ pip install pyautogui
```

```python
import cv2
import pyautogui
import np

img_rgb = cv2.cvtColor(np.array(pyautogui.screenshot()), cv2.COLOR_RGB2BGR)
template = cv2.imread('apple.png')

w, h = template.shape[:-1]
res = cv2.matchTemplate(img_rgb, template, cv2.TM_CCOEFF_NORMED)
threshold = .8

loc = np.where(res >= threshold)
for pt in zip(*loc[::-1]):  # Switch columns and rows
  cv2.rectangle(img_rgb, pt, (pt[0] + w, pt[1] + h), (0, 0, 255), 2)

cv2.imwrite('result.png', img_rgb)
```

Voila.
