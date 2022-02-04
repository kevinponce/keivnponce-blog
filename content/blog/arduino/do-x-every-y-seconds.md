---
title: Arduino Do X Every Y Seconds
date: "2019-09-12T20:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
---

```c
long previousMillis = 0;
long interval = 1000;  
int tftrefresh = 0;

void setup() {}

void loop() {
  //********************delay 1s**************************
 
   unsigned long currentMillis = millis();

  if(currentMillis - previousMillis > interval) {
     // save the last time you blinked the LED
     previousMillis = currentMillis;  
   
     if (tftrefresh == 0)
       tftrefresh = 1; // sets tft efresh variable to 1
     else
       tftrefresh = 0; //if not tftrefresh = 0
  }
 
  if (tftrefresh == 1) {
    // TODO do something here
    tftrefresh = 0;
  }
  //*********************end of delay 1s*******************
}
```