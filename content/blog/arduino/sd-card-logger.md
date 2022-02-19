---
title: Arduino SD card logger
date: "2020-11-24T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
description: How to log data to an SD card 
---

How to log data to an SD card 

```c
/*
 * Uno
 * Connect the 5V pin to the 5V pin on the Arduino
 * Connect the GND pin to the GND pin on the Arduino
 * Connect CLK to pin 13
 * Connect DO to pin 12
 * Connect DI to pin 11
 * Connect CS to pin 10
 * 
 * MRK wifi 1010
 * Connect the 5V pin to the 5V pin on the Arduino
 * Connect the GND pin to the GND pin on the Arduino
 * Connect CLK to pin SCK
 * Connect DO to pin MISO
 * Connect DI to pin MOSI
 * Connect CS to pin 4
*/

#include <SPI.h>
#include <SD.h>

const int chipSelect = 4;
unsigned long myTime;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  Serial.print("Initializing SD card...");

  // see if the card is present and can be initialized:
  if (!SD.begin(chipSelect)) {
    Serial.println("Card failed, or not present");
    // don't do anything more:
    while (1);
  }
  Serial.println("card initialized.");
}

void loop() {
  myTime = millis();
  // make a string for assembling the data to log:
  String dataString = "Time: ";
  dataString += myTime;

  dataString += ": test";

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  File dataFile = SD.open("datalog.txt", FILE_WRITE);

  // if the file is available, write to it:
  if (dataFile) {
    dataFile.println(dataString);
    dataFile.close();
    // print to the serial port too:
    Serial.println(dataString);
  }
  // if the file isn't open, pop up an error:
  else {
    Serial.println("error opening datalog.txt");
  }
}
```