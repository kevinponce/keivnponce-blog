---
title: Track mouse using python
date: "2021-05-01T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to track your mouse using python.
---

Here is a simple snippet of code that allows you track your mouse using python.

Before you can use it, make sure you install pygame.
```
$ pip install pygame
```

```python
import pygame
from pygame.locals import *  #just so that some extra functions work
pygame.init() #this turns pygame 'on'

x = y = 0
running = 1
screen = pygame.display.set_mode((640, 400))

while running:
    event = pygame.event.poll()
    if event.type == pygame.QUIT:
        running = 0
    elif event.type == pygame.MOUSEMOTION:
        print("mouse at (%d, %d)" % event.pos)
        if event.pos == (300,200):
            screen = pygame.display.set_mode((400, 500))
    screen.fill((0, 0, 0))
    pygame.display.flip()
```
