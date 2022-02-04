---
title: Arduino Capacitive Touch
date: "2020-11-24T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
description: How to use a capacitive touch
---

How to use a capacitive touch.

```c
const int TOUCH_BUTTON_PIN = 2;  // Input pin for touch state

// Global Variables
int buttonState = 0;             // Variable for reading button

void setup() {
  Serial.begin(9600);
  pinMode(TOUCH_BUTTON_PIN, INPUT);
}

void loop() {
  // Read the state of the capacitive touch board
  buttonState = digitalRead(TOUCH_BUTTON_PIN);

  Serial.println(buttonState);
}
```
