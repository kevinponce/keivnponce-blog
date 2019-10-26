---
title: Arduino Relay
date: "2019-09-07T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
---

Here is a snippet of code to use relay.

```
// Relay VCC to Arduino 5V
// Relay GND to Arduino GND
// Relay IN1 to Arduino 7

#define Relay 7

void setup() {
  pinMode(Relay, OUTPUT);
}

void loop() {
  digitalWrite(Relay, HIGH);
  delay(1000);
  digitalWrite(Relay, LOW);
  delay(1000);
}
```
Do not forget to connect the circuit you wish to connect and discount to the relay.
