---
title: Arduino control Keyboard
date: "2019-12-31T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
description: How to control a keyboard using an Arduino
---

Here is a snippet of code to used to control a keyboard using an Arduino.

```c
#include "Keyboard.h"

void setup() {
  Serial.begin(9600);
  Keyboard.begin();
}

void loop() {
  Keyboard.write('h');
  delay(10000);
}
```
