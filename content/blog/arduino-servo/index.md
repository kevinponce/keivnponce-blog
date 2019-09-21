---
title: Arduino Servo
date: "2019-09-21T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
---

Before you start using servos with an arduino, you need to download drivers.

The servo driver I used was:
`https://github.com/adafruit/Adafruit-PWM-Servo-Driver-Library`

I added it the arduino library folder.

# Wired
PC9685 VCC -> Arduino 5V
PC9685 SDA -> Arduino A4
PC9685 SCW -> Arduino A5
PC9685 GND -> Arduino GND

Also do not forget to connect PC9685 to a 5V power supply to the green connection.


Now you can use the following script to control servos.
```c
#include <Wire.h>
#include <Adafruit_PWMServoDriver.h>

Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver(0x40);

#define SERVOMIN  125
#define SERVOMAX  575

// our servo # counter
uint8_t servonum = 0;

void setup() {
  Serial.begin(9600);
  Serial.println("16 channel Servo test!");

  pwm.begin();
  
  pwm.setPWMFreq(60);  // Analog servos run at ~60 Hz updates

  yield();
}

// the code inside loop() has been updated by Robojax
void loop() {

    pwm.setPWM(0, 0, 125 );
    delay(1000);
    pwm.setPWM(0, 0, 575 );
    delay(1000);
}
```
