---
title: Arduino Water Sensor
date: "2019-10-24T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
---

Here is a snippet of code to use water sensor.

```
// Water Sensor + to Arduino 5V
// Water Sensor - to Arduino GND
// Water Sensor S to Arduino A5

void setup() {
  Serial.begin(9600);
}

void loop() {
  int resval = analogRead(5);
  Serial.println(resval);
}
```
