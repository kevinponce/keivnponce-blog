---
title: Arduino AWS IoT Core
date: "2019-10-26T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
description: How to connect arduino to AWS IoT Core.
---

This will only work for MKR WiFi 1010!

This content is only the action from this article:
https://docs.arduino.cc/tutorials/mkr-wifi-1010/securely-connecting-an-arduino-mkr-wifi-1010-to-aws-iot-core



## Install board
```
Click Tools
Click Board: "..."
Click Board Manager.
Search for Arduino SAMD
Instal Arduino SAMD
```

## Install libraries
```
Click Sketch
Select Include Library
Click Manage Libraries
```

### Serach and Install:
* WiFiNINA
* ArduinoBearSSL
* ArduinoECCX08
* ArduinoMqttClient
* Arduino Cloud Provider Examples

## Configure Private Key
```
Click File
Click Examples
Click ArduinoECCX08
Click Tools
Click ECCX08CSR.
Upload
Open Serail Monitor
```

Answer yes to lock it now.
I left everything else blank except common name, and slot.
next you would like to generate a new private key.

save the key whole key including -----BEGIN CERTIFICATE REQUEST----- into a .csr file to be used later.



## AWS
### Create thing
```
Go to https://aws.amazon.com/
Go to console
Search for iot core
Click manage
Click things
Select Create a single Thing.
Give it a name and click next
Select Upload CSR generated earlier
Skip Create Policy
Create thing
```

### Create Policy
```
Click Secure left hand nav
Click Policies
Click Create

Policy name: AllowEverything
Create Policy documents for:
iot:Connect
iot:Publish
iot:Receive
iotSubscribe

with the policy resource *

Create
```

### Attach Policy
```
Click Secure left hand nav
Click Certificates
Click Cert
Click Actions and make sure it is Activated
Click Download
click Attach policy
select AllowEverything
```

### Get endpoint
```
Click Settings left hand nav
copy end point
```



```
Open Arduino Studio
Click File
Click Examples
Click Arduino Cloud Provider Examples
Click AWSIoT
Click AWS_IoT_WiFi
```

Update `arduino_secrets.h` file
```
SECRET_SSID: wifi name
SECRET_PASS: wifi password
SECRET_BROKER: url aws ios settings
SECRET_CERTIFICATE: filed downloaded from aws iot core policy
```

## Test
### Subscribte
```
Open AWS
go to iot core
Click test left hand nav
Click MQTT test client
click Subscribe topic
enter arduino/outgoing
Click subscribte
```

You should see message appearing every 5 seconds!!!


### Publish
```
Click publish to a topic
enter arduino/incoming
click public
```

You should see message in arduino seral monitor!!!
