---
title: Setup domain on Godaddy
date: "2022-04-10T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to setup domain on Heroku and Godaddy
---


I would recomend using dns from cloudflare but here is how you can setup a dmain using godaddies dns.

# Heroku
## Not free Tier
```
hopen heroku
select app
go to resources
make sure you are on minimum hobby tier
```

## SSL
```
go to settings
scroll down to ssl certificates
click configure
select Automatic Certificate Management (ACM)
```

## Add domain
```
open heroku
select app
go to settings
scroll down to domains
click add domain
enter domain with www
you will use dns target later
```

# Go Daddy
## DNS
```
go do godaddy
select domain
click manage dns
Delete undesired records

Click add dns record


type CNAME
Name = www
Value will be dns target from heroku under domain
```

## Forwards
```
Scroll down to forwarding
click add forwarding
select https
enter domain with www like ww.example.com
select permanent 301
```


clean-woodland-nojumomif5jalb6auidib12l.herokudns.com