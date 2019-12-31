---
title: Arduino control Mouse
date: "2019-12-31T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
description: How to control a mouse using an Arduino
---

Here is a snippet of code to used to control a mouse using an Arduino.

```
#include "Mouse.h"

void setup() {
  Serial.begin(9600);
  Mouse.begin();
}

void loop() {
   Mouse.move(0, -40);
  delay(5000);
}
```
