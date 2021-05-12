---
title: Arduino esc brushless motor
date: "2020-12-14T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
description: How to control brushless motor with an Arduino using an esc.
---

```
/* Wiring:
 * ESC GND -> Arduino GND
 * ESC V -> Arduino 5V
 * ESC Signal -> Arduino Digital Pin 8
 * ESC to brush less motor
 * ESC to bench power supply 12V
 * 
 * 10K POT V -> Arduino 5V 
 * 10K POT GND -> Arduino GND
 * 10K POT S -> Arduino A0
*/
 
 #include <Servo.h>
Servo ESC;     // create servo object to control the ESC
int potValue;  // value from the analog pin
void setup() {
  Serial.begin(9600);

  // Attach the ESC on pin 8
  ESC.attach(8,1000,2000); // (pin, min pulse width, max pulse width in microseconds) 
}
void loop() {
  potValue = analogRead(A0);   // reads the value of the potentiometer (value between 0 and 1023)
  Serial.println(potValue);
  potValue = map(potValue, 0, 1023, 0, 180);   // scale it to use it with the servo library (value between 0 and 180)
  ESC.write(potValue);    // Send the signal to the ESC
}
```