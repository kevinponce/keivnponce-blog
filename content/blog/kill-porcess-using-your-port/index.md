---
title: Kill porcess using your port
date: "2020-03-06T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to kill process using your port
---

Rails sometime freezes and you are force to close terminal.
This is can leave the port taken and your not able to start rails on the same port.

Here is a little command you can run to clear that port on your laptop so you can run rails again.
*make sure you change port `3000` to the port you want to use*
```
sudo kill -9 $(lsof -i :3000 -t)
```