---
title: Arduino 3 Axis Accelerometer
date: "2019-10-26T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
description: How to use a axis accelerometer with an Arduino using Adafruit ADXL345.
---
Here is a snippet of code to use ADXL345 a  Axis accelerometer.

```
// Click sketch
// Select Include Librart
// Select Manage Libraies...
// Install Adafruit ADXL345
// Install Adafruit Unified Sensor

// classic Arduino
// ADXL345 VIN to Arduino 5V
// ADXL345 GND to Arduino GND
// ADXL345 SDA to Arduino A4
// ADXL345 SCL to Arduino A5

// newer Arduino
// ADXL345 VIN to Arduino 5V
// ADXL345 GND to Arduino GND
// ADXL345 SDA to Arduino SDA
// ADXL345 SCL to Arduino SCL

#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_ADXL345_U.h>

Adafruit_ADXL345_Unified accel = Adafruit_ADXL345_Unified();

void setup(void) 
{
   Serial.begin(9600);  

   if(!accel.begin())
   {
      Serial.println("No ADXL345 sensor detected.");
      while(1);
   }
}

void loop(void) 
{
   sensors_event_t event; 
   accel.getEvent(&event);
   Serial.print("X: "); Serial.print(event.acceleration.x); Serial.print("  ");
   Serial.print("Y: "); Serial.print(event.acceleration.y); Serial.print("  ");
   Serial.print("Z: "); Serial.print(event.acceleration.z); Serial.print("  ");
   Serial.println("m/s^2 ");
   delay(500);
}
```