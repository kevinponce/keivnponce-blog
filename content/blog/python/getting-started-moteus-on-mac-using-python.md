---
title: Getting started moteus on mac using python
date: "2021-02-07T22:12:00.121Z"
tags: ["python"]
header: { type: 'icon', bgColor: '#4B8BBE', icon: 'python' }
description: Getting started moteus on mac using python
---

Before you can use it, make sure you install moteus-gui.
```
$ pip3 install moteus-gui
```

First you need to find the usbmodem.
You can do this by running the following:
```
$ ls /dev/* | grep usb
```

Mine return `/dev/cu.usbmodem2FB917B11`

Now run the following command to open the gui:
```
$ python3 -m moteus_gui.tview --devices=1 --fdcanusb /dev/cu.usbmodem2FB917B11
```

To plot the `unwrapped posistion` do the following:
```
Click `telemetry`
Select Motor -> servo_stats
Right Click unwrapped_position
Select Plot Left
```

Now lets run a command.
Type the following in the console:
```
d pos nan 0.2 0.3 s0.8
```

If it does not spin the motor, check servo_status.mode and servo_status.fault.
When I tried this, I got fault code 39.
This happened, because I spun the motor too much by hand...

To fix this run:
```
d stop
```

Then manually turn motor till the value is between 1 and -1. Now try again

For other commands:
```
https://github.com/mjbots/moteus/blob/main/docs/reference.md
```

Voila.
