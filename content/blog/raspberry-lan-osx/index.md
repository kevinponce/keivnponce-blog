---
title: Raspberry LAN OSX
date: "2019-08-04T22:12:00.121Z"
tags: ["Raspberry"]
header: { type: 'icon', bgColor: '#B41039', icon: 'raspberry' }
---

Open System Prefrences

###Click Sharing
check Thunderbold ethernet on right side
Check Internet sharing on the right side
Click start on popup dialog
Open System Prefrences
Click Network
Click Thunderbold ethernet
Make sure using DHCP and make sure status status says connect.

```
$ brew install nmap
$ ifconfig
```
Look for bridge100
and find inet and copy ip into:

```
$ nmap -n -sP Your-IP-Address/24
```

if that does not work change last number in ip to 0
look for ip that is not current ip

```
$ ssh pi@ip-from-above
```

Voila