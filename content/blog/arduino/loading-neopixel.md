---
title: Loading NeoPixel
date: "2021-04-13T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
description: How create a loading NeoPixel with an Arduino.
---

Before you can use Adafruit_NeoPixel, you must install the library.
Go to Tools -> Manage libraries
Search for Adafruit_NeoPixel and install it.


Here is a snippet of code that displays a loading NeoPixel.

```
// Arduino 5V -> NeoPixel PWR
// Arduino GND -> NeoPixel GDN
// Arduino D1 -> NeoPixel Data Input

#include <Adafruit_NeoPixel.h>
 
#define PIN       1
#define NUM_LEDS 24
 
Adafruit_NeoPixel strip = Adafruit_NeoPixel(NUM_LEDS, PIN, NEO_GRB);
 
uint32_t color = strip.Color(75, 250, 100); // Change RGB color value here

int head = 1;

void setup() {
  strip.begin();
  strip.show();            // Initialize all pixels to 'off'
  strip.setBrightness(40); // 40/255 brightness (about 15%)
}
 
void loop() {
  for(int i=0; i<NUM_LEDS; i++) {
    if (i == head) {
      strip.setPixelColor(i, color); 
    } else {
      strip.setPixelColor(i, 0);
    }
    strip.show();
  }
  
  delay(40);

  if (head + 1 >= NUM_LEDS) {
    head = 0;
  } else {
    head++;
  }
}
```