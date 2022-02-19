---
title: Arduino Piezo Trigger
date: "2021-03-03T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
description: How to use a piezo as a trigger with an Arduino.
---

```c
void setup() {
  Serial.begin(9600);
}

void loop() {
  if (analogRead(A0) > 0) {
    Serial.println(analogRead(A0));
  }
  delay(5);
}
```