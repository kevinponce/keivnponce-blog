---
title: Control your mouse using python
date: "2019-12-26T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to control your mouse using pythong.
---

Here is a simple snippet of code that allows you move the mouse around the perimeter of a screen programmatically.
It also prints out the mouse position and scrolls.

Before you can use the colde, make sure you install pyautogui
```
$ pip install pyautogui
```

```python
import pyautogui
import time

screen_size = pyautogui.size()

print(pyautogui.position())

pyautogui.scroll(200)

pyautogui.moveTo(1, 1, duration = 1)
pyautogui.moveTo(screen_size.width, 1, duration = 1)
pyautogui.moveTo(screen_size.width, screen_size.height, duration = 1)
pyautogui.moveTo(1, screen_size.height, duration = 1)
pyautogui.moveTo(1, 1, duration = 1)
time.sleep(1)
```

Voila.