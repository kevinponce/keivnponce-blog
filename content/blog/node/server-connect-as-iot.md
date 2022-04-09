---
title: Node server connect as IoT
date: "2022-04-08T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to connect to as IoT
---

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
Select Auto-generate a new certificate
Skip Create Policy
Create thing
Download the following keys:
```

```
* Public key file
* Private key file
* Root CA certificates
```

### Create Policy
```
Click Secure left hand nav
Click Policies
Click Create

Type your desired name for policy
Change Policy document to json and enter the following:
```

You will need to change topic name("pillow").

```javascript
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "iot:*"
      ],
      "Resource": [
        "arn:aws:iot:us-east-1:218058844305:topic/pillow"
      ]
    }
  ]
}
```


### Attach Policy
```
Click Secure left hand nav
Click Certificates
Find and Click cert

Click Actions
Click Download
Click Attach policy
Select policy by name
```

### Get endpoint
```
Click Settings left hand nav
copy end point
```

# Node time!!!!!

First you need to install dependencies:
```
npm install aws-iot-device-sdk --save
npm install dotenv --save
```

Setup up files
## .env
```
AWS_IOT_HOST=
AWS_IOT_PRIVATE_KEY="<XXXXX-private.pem.key>"
AWS_IOT_CERT="<XXXX-certificate.pem.crt>"
AWS_ROOT_CA="<AmazonRootCAX.pem>"
```

## index.js
```
import awsIot from 'aws-iot-device-sdk';
import 'dotenv/config'

const clientId = 'pillow-' + (Math.floor((Math.random() * 100000) + 1));

const device = awsIot.device({
  privateKey: Buffer.from(process.env.AWS_IOT_PRIVATE_KEY),
  clientCert: Buffer.from(process.env.AWS_IOT_CERT),
  caCert: Buffer.from(process.env.AWS_ROOT_CA),

  clientId,

  host: process.env.AWS_IOT_HOST,

  /* milliseconds */
  baseReconnectTimeMs: 4000,
  /* seconds */
  keepAlive: 300,
  /* milliseconds */
  delay: 4000,
});

// device.subscribe('arduino/outgoing');
device.subscribe('pillow');

device.on('connect', function() {
   console.log('connect');
});

device.on('close', function() {
   console.log('close');
});

device.on('reconnect', function() {
   console.log('reconnect');
});

device.on('offline', function() {
   console.log('offline');
});

device.on('error', function(error) {
   console.log('error', error);
});

device.on('message', function(topic, payload) {
   console.log('message', topic, payload.toString());
});

device.publish('pillow', JSON.stringify({
  mode1Process: 69
}));
```
