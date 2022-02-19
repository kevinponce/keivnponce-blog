---
title: Arduino Adafruit BNO055 IMU
date: "2020-11-24T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
description: How to use a Adafruit BNO055 as a IMU on a Arduino.
---

Before you can use Adafruit BNO055, you must install the library.
Go to Tools -> Manage libraries
Search for Adafruit BNO055 and install it.


Here is a snippet of code to use Adafruit BNO055.

```c
// Click sketch
// Select Include Librart
// Select Manage Libraies...
// Install Adafruit BNO055

// Uno R2
// Adafruit BNO055 VIN: Arduino 5V
// Adafruit BNO055 GND: Arduino GDN
// Adafruit BNO055 SDA: Arduino A4
// Adafruit BNO055 SCL: Arduino A5

// MKR Wifi 1010
// Adafruit BNO055 VIN: Arduino 5V
// Adafruit BNO055 GND: Arduino GDN
// Adafruit BNO055 SDA: Arduino SDA
// Adafruit BNO055 SCL: Arduino SCL

#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BNO055.h>
#include <utility/imumaths.h>
  
Adafruit_BNO055 bno = Adafruit_BNO055(55);
 
void setup(void) 
{
  Serial.begin(9600);
  Serial.println("Orientation Sensor Test"); Serial.println("");
  
  /* Initialise the sensor */
  if(!bno.begin())
  {
    /* There was a problem detecting the BNO055 ... check your connections */
    Serial.print("Ooops, no BNO055 detected ... Check your wiring or I2C ADDR!");
    while(1);
  }
  
  delay(1000);
    
  bno.setExtCrystalUse(true);
}
 
void loop(void) 
{
  /* Get a new sensor event */ 
  sensors_event_t event; 
  bno.getEvent(&event);
  
  /* Display the floating point data */
  Serial.print("X: ");
  Serial.print(event.orientation.x, 4);
  Serial.print("\tY: ");
  Serial.print(event.orientation.y, 4);
  Serial.print("\tZ: ");
  Serial.print(event.orientation.z, 4);
  Serial.println("");
  
  delay(100);
}
```