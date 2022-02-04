---
title: Arduino control brushless motor
date: "2020-12-14T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
description: How to control brushless motor with an Arduino.
---

```c
/* Wiring:
 * ESC GND -> Arduino GND
 * ESC V -> Arduino 5V
 * ESC Signal -> Arduino Digital Pin 8
 * ESC to brush less motor
 * ESC to bench power supply 12V
 */

#include<Servo.h>

Servo esc;

void setup() {
  Serial.begin(9600);

  esc.attach(8);
  delay(1);
  esc.write(0);
  delay(10000);
}

void loop() {
  esc.write(map(0, 0, 1023, 1000, 2000));
  delay(10000);
  esc.write(map(500, 0, 1023, 1000, 2000));
  delay(10000);
}
```