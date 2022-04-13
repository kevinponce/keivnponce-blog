---
title: Heroku mongodb atlas
date: "2020-01-23T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to setup mongodb atlas for heroku
---


```
Create new Cluster
select Shared
select tier size
update cluster name
click create cluster

Create new User
save password

Network access
Click add new IP
If you are lazy and do not care about security, set ip to 0.0.0.0 which is for everywhere.

Select Databse
Click connect
Click connect your application
copy url
change password

you can not got to heroku and update env with the url provided above
```