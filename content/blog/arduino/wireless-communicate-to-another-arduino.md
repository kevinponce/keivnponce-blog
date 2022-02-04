---
title: Arduino wireless communicate to another Arduino
date: "2020-01-06T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
description: How to wireless communicate between two Arduinos.
---

Wireless communication is something that can take your project to the next level.
NRF24L01 breakout board makes it really easy for Arduinos to communicate wireless.

Time to connect the NRF24L01 to Arduino:
* NRF24L01 VCC -> Arduino 3.3V
* NRF24L01 GND -> Arduino GND
* NRF24L01 CSN -> Arduino 8
* NRF24L01 CE -> Arduino 7
* NRF24L01 SCK -> Arduino 13
* NRF24L01 MOSI -> Arduino 11
* NRF24L01 MISO -> Arduino 12

Here is the snippets of code for both the transmitter and receiver:

## Transmitter Code
```c
// NRF24L01 VCC -> Arduino 3.3V
// NRF24L01 GND -> Arduino GND
// NRF24L01 CSN -> Arduino 8
// NRF24L01 CE -> Arduino 7
// NRF24L01 SCK -> Arduino 13
// NRF24L01 MOSI -> Arduino 11
// NRF24L01 MISO -> Arduino 12
#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>

RF24 radio(7, 8); // CE, CSN
const byte address[6] = "00001";

void setup() {
  Serial.begin(9600);
  Serial.println("start");
  radio.begin();
  radio.openWritingPipe(address);
  radio.setPALevel(RF24_PA_MIN);
  radio.stopListening();
}

void loop() {
  const char text[] = "Hello World";
  radio.write(&text, sizeof(text));
  Serial.println("sent");
  delay(1000);
}
```

## Receiver Code
```c
// NRF24L01 VCC -> Arduino 3.3V
// NRF24L01 GND -> Arduino GND
// NRF24L01 CSN -> Arduino 8
// NRF24L01 CE -> Arduino 7
// NRF24L01 SCK -> Arduino 13
// NRF24L01 MOSI -> Arduino 11
// NRF24L01 MISO -> Arduino 12
#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>

RF24 radio(7, 8); // CE, CSN
const byte address[6] = "00001";

void setup() {
  Serial.begin(9600);
  Serial.println("uploaded1" );
  radio.begin();
  radio.openReadingPipe(0, address);
  radio.setPALevel(RF24_PA_MIN);
  radio.startListening();
  Serial.println("uploaded3" );
}

void loop() {
  if (radio.available()) {
    Serial.println("yesss");
    char text[32] = "";
    radio.read(&text, sizeof(text));
    Serial.println(text);
  }
}
```
