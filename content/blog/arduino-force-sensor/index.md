---
title: Arduino Force Sensor
date: "2020-01-05T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
description: How to use a force sensor with an Arduino.
---

Adafruit Square Force-Sensitive Resistor makes it really easy to detect the amount of force by returning a int value from 0 to 1023.
This is a great sensor but it does not provide where on the sensor was pressed.


Time to connect the sensor to Arduino:
* Connect the force sensor right lead to 5V.
* Connect the force sensor left lead to A0 and 100k ohm resistor. The other lead of the resistor will be connected to ground.


Now you are able to use the following snippet of code to determine the amount of force.

```
// Force Sensor Right -> 5V
// Force Sensor Left -> ((100k ohm && A0 )-> GND)

void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println(analogRead(1));
}
```