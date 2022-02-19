---
title: Ngrok
date: "2020-11-24T22:12:00.121Z"
tags: ["arduino"]
header: { type: 'icon', bgColor: '#0C9097', icon: 'arduino' }
description: How to use ngrok on mac

First install ngrok by running:
```
brew install ngrok/ngrok/ngrok
```

Sign up for an account!
Auth your account in terminal:
```
ngrok authtoken <TOKEN GOES HERE>
```

run in terminal:
```
ngrok http 80
ngrok http http://127.0.0.1:5000
```