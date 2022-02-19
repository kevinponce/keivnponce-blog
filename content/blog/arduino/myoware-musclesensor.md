---
title: Arduino MyoWare Muscle Sensor
date: "2020-11-24T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
description: How to measure muscle movement using Arduino MyoWare Muscle Sensor
---

How to measure muscle movement using Arduino MyoWare Muscle Sensor.

```c
// MyoWareMuscleSensor +: Arduino 5V
// MyoWareMuscleSensor -: Arduino GDN
// MyoWareMuscleSensor SIG: Arduino A0

void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int sensorValue = analogRead(A0);

  // Convert the analog reading (which goes from 0 - 1023) to a voltage (0 - 5V):
  float voltage = sensorValue * (5.0 / 1023.0);
  // print out the value you read:
  Serial.println(voltage);
}
```
