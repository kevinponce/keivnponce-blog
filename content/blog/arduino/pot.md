---
title: Arduino POT
date: "2020-11-15T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
description: Using POT with an Arduino.
---

```c
/* Wiring:
 * 5 Lead Pot
 * POT LEFT to RIGHT leads facing you
 * POT LEAD 0 -> N/A
 * POT LEAD 1 -> GND
 * POT LEAD 2 -> Arduino A0
 * POT LEAD 3 -> Arduino 5V
 * POT LEAD 4 -> N/A
 */  
 
void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println(analogRead(A0)); // 0 - 1023
  delay(2);
}
```
