---
title: Arduino Bluetooth
date: "2019-09-07T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
description: How to send and receive messages through Bluetooth on Arduino.
---
Adding Bluetooth to Arduino using HM-10 is really easy.

It can be achieve by uploading the following to an arduino.
```c
// Bluetooth vcc to Arduino 3.3V
// Bluetooth gnd to Arduino gnd
// Bluetooth gnd to Arduino gnd
// Bluetooth RX to Arduino 3
// Bluetooth TX to Arduino 2

#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3);

void setup() {
  Serial.begin(9600);

  while (!Serial) {
    ;
  }

  Serial.println("Hello You");

  // http://fab.cba.mit.edu/classes/863.15/doc/tutorials/programming/bluetooth.html
  mySerial.begin(9600);
}

void loop() {
  while (Serial.available()) {
    mySerial.write(Serial.read());
  }

  while (mySerial.available()) {
    Serial.write(mySerial.read());
  }
}
```

Once the Arduino is running the code, open serial port Arduino Editor.

Now this is where the fun starts...

Changing the name of HM-10 was a fun task.

The documentation showed this:
```
AT + NAME [para1] 
```

But `AT + NAME [EXAMPLE]` did not work...

I noticed these variations online:
```
AT + NAME=EXAMPLE
at+name=EXAMPLE
AT+NAME=EXAMPLE
```
I though `AT+NAME=EXAMPLE` worked, but it turned out it name it `=EXAMPLE`.

So for me to change the name I to run:
```
AT+NAMEEXAMPLE
```

Here are some useful commands provide by HM-10:
```
AT+NAMEEXAMPLE       # rename to EXAMPLE
AT+NAME?             # return name
AT+RENEW             # return to factory setting
AT+PASS?             # return pass code
AT+PASS111111        # set pass code to 111111
AT+ADDR?             # Query the native MAC address 
AT+BAUD?             # Query the baud rate 
AT+BAUD9600          # set baud rate to 9600
AT+CON0017EA0943AE   # connect to address 0017EA0943AE
AT+MODE?             # Query module working mode 
AT+MODE1             # Set mode to 1
AT+SLEEP             # Set the device in sleep mode.
```
