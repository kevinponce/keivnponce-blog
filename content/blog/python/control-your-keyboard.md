---
title: Control your keyboard using python
date: "2019-12-26T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to control your keyboard using python.
---

Here is a simple snippet of code that allows you open notes, create a new note, and type a message programmatically.

It also prints out all of the keyboard keys to use with hotkey.

Before you can use it, make sure you install pyautogui.
```
$ pip install pyautogui
```

```python
# pip install pyautogui
import pyautogui
import time

print(pyautogui.KEYBOARD_KEYS)

pyautogui.hotkey('command', ' ')
pyautogui.typewrite('notes')
pyautogui.hotkey('enter')

time.sleep(2)
pyautogui.hotkey('command', 'n')
pyautogui.typewrite('I see you')
```

Voila.