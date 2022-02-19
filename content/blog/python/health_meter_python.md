---
title: Health meter python
date: "2022-01-03T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: How to read health meter in python
---

Before you can use it, make sure you install:
```
$ pip install pyserial
$ pip3 install mss
```

```python
# pip install mss
# pip install pyserial

import mss
import cv2
import numpy as np
import serial
import time

class HealthMeter:
  def __init__(self, dimensions, monitor, health, color):
    self.monitor = dimensions.copy()
    self.monitor['mon'] = monitor
    self.health = health
    self.color = color
    self.points = self.calc_points()

  def filter_img(self, img):
    img = np.array(img)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    grayImage = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    return cv2.bitwise_not(grayImage)

  def calc_hor_points(self):
    width = self.monitor['width']
    number_of_points = self.health
    health_width = int(width / number_of_points)
    points = [0]

    for i in range(1, number_of_points):
      points.append(i * health_width)

    return points

  def calc_vert_point(self):
    height = self.monitor['height']

    return int(height / 2)

  def calc_points(self):
    y = self.calc_vert_point()
    points = []

    for x in self.calc_hor_points():
      points.append([y, x])

    return points

  def full_screen(self):
    with mss.mss() as sct:
      im = np.array(sct.grab(sct.monitors[self.monitor['mon']]))
      im = np.flip(im[:, :, :3], 2)  # 1
      im = cv2.cvtColor(im, cv2.COLOR_BGR2RGB)

      return im

  def draw(self):
    green = [0,255,0]
    left = self.monitor['left']
    top = self.monitor['top']

    with mss.mss() as sct:
      im = np.zeros((1000,1000,3),np.uint8)
      im = self.full_screen()

      for point in self.points:
        y = top + point[0]
        x = left + point[1]
        im[y: (y+10),x:(x + 10)] = green

      cv2.imshow('test', im)
      cv2.waitKey(0)
    

  def hit(self, callback):
    with mss.mss() as sct:
      while True:
        print(self.health)
        time.sleep(1)
        if 0 >= self.health or self.health > len(self.points):
          break

        img = self.filter_img(sct.grab(self.monitor))
        point = self.points[self.health - 1]

        if int(img[point[0], point[1]]) > self.color or True:
          self.health -= 1
          callback(self.health)


def callback(health):
  print('callback')

def monitor_details(monitor):
  with mss.mss() as sct:
    return sct.monitors[monitor]
    mon['top']
    mon['left']

if __name__ == '__main__':
  monitor = 1
  mon = monitor_details(monitor)

  hm = HealthMeter(
         {
           "top": mon['top'] + 83,
           "left": mon['left'] + 750,
           "width": 290,
           "height": 28,
         },
         monitor,
         6,
         200
       )

  # hm.draw()
  hm.hit(callback)

```