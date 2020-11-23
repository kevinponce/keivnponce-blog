---
title: DC motor encode precisely
date: "2020-11-13T23:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
description: List branch sort by commit date
---

Here is a snippet of code that allows a 12V DC motor with a Hall Effect Quadrature Encoder to precisely move using an arduino.

Before you can use the code, you must install PIDController library by doing the following:

```
* Click sketch
* Select Include Librart
* Select Manage Libraies...
* Install PIDController
```

```
/* Wiring:
 * 12V Geared DC motor with Hall Effect Quadrature Encoder
 * Hall Sensor B Vout -> Arduino  D2
 * Hall Sensor A Vout -> Arduino  D3
 * Hall Sensor Vcc -> 12 Volt Power Supply
 * Hall Sensor GND -> GND
 * Motor- -> L298N Out3
 * Motor+ -> L298N Out4
 * 
 * L298N Motor Driver
 * L298N Out3 -> Motor-
 * L298N Out4 -> Motor+
 * L298N IN3 -> Arduino 9
 * L298N IN2 -> Arduino 10
 * L298N 12V+ -> 12 Volt Power Supply
 * L298N GND -> GND
 * 
 * 5 Lead Pot
 * POT LEFT to RIGHT leads facing you
 * POT LEAD 0 -> N/A
 * POT LEAD 1 -> GND
 * POT LEAD 2 -> Arduino A0
 * POT LEAD 3 -> Arduino 5V
 * POT LEAD 4 -> N/A
 */  
 
#include <PIDController.h>

#define encoderA 2
#define encoderB 3
#define motorA 9
#define motorB 10

volatile long int encoder_pos = 0;
PIDController pos_pid;
int motor_value = 255;

void setup() {
  Serial.begin(9600);
  pinMode(encoderA, INPUT);
  pinMode(encoderB, INPUT);
  pinMode(motorA, OUTPUT);
  pinMode(motorB, OUTPUT);
  attachInterrupt(digitalPinToInterrupt(2), encoder, RISING);

  pos_pid.begin();    
  pos_pid.tune(20, 0, 200);    
  pos_pid.limit(-255, 255);
}

void loop() {
  pos_pid.setpoint((int)(((float)analogRead(A0)/1023) * 374.0 *1));
  motor_value = pos_pid.compute(encoder_pos);

  if (motor_value > 0) {
    MotorCounterClockwise(motor_value);
  } else {
    MotorClockwise(abs(motor_value));
  }

  Serial.println(encoder_pos);
  delay(2);
}

void encoder() {
  if (digitalRead(3) == HIGH) {
    encoder_pos++;
  } else {
    encoder_pos--;
  }
}

void MotorClockwise(int power){
  if (power > 50) {
    analogWrite(9, power);
    digitalWrite(10, LOW);
  } else {
    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
  }
}

void MotorCounterClockwise(int power) {
  if (power > 50) {
    analogWrite(10, power);
    digitalWrite(9, LOW);
  } else {
    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
  }
}
```
