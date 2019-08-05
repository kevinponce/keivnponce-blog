---
title: Raspberry Setup
date: "2019-08-04T22:12:00.121Z"
tags: ["Raspberry"]
header: { type: 'icon', bgColor: '#B41039', icon: 'raspberry' }
---

##Download Raspberry pi OS
First go to the following site and download noobs zip:
`https://www.raspberrypi.org/downloads/noobs/`

##Format SD Card
This step is only needed if this a new SD card

For mac:
* Open Disk Utility
* Select the SD card on left nav
* Click Erase
* Select MS-DOS
* Click Erase

## Copy files
* Once download is complete, extract zip
* Copy the zip contents to SD card
* Eject SD card

## Connect Peripheral
* Insert micro USB into Raspberry pi
* Plug-in USB keyboard and mouse to Raspberry pi
* Plug-in HDMI to Raspberry pi
* Plug-in 5V power supply
* As soon as you plug it in, it will power up.

##Install OS
* Select your language at the bottom of the screen
* Check raspbian
* Click install. This part will take a while.
* When it is done, go through setup and then reboot

## Configuration
* Click Raspberry in top left
* Click Preferences
* Click Raspberry PI Configuration
* Change Hostname
* Click Interfaces
* Enable SSH and VNC
* Click on and reboot

## SSH into
* Open terminal on Raspberry and run hostname -I
* Open terminal on Mac and run:
```
ssh pi@raspberry-ip
```

## VNC into
download real vnc from:
`https://www.realvnc.com/en/connect/download/viewer/macos`
* Open VNC Viewer
* Insert ip
* Type user and password

Voila