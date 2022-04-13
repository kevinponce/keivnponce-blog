---
title: Setup domain on Cloudflare
date: "2022-04-10T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to setup domain on Heroku and Cloudflare
---

# Heroku
## Not free Tier
```
hopen heroku
select app
go to resources
make sure you are on minimum hobby tier
```

## Add domain
```
open heroku
select app
go to settings
scroll down to domains
click add two domains
example.com
www.example.com
you will use dns target later
```

# Cloudflare
## Create domain
```
go to cloudflare
click new domain
enter domain
```

## config dns
```
click dns

click add record
type: CNAME
name: your domain with out www like example.com
content dns target from heroku

click add record
type: CNAME
name: www
content dns target from heroku

copy the namesevers for later step
```

## Forward www to non www
```
Click Rules
Click page rules
click create page rule

enter url to be like www.example.com/*
select setting to be forwarding url
select status code 301

Enter destination URL to be like http://examplecom/$1
```

## Force SSL
```
Click SSL/TLS
Click Edge Certicates
make sure Always Use HTTPS is one
```

## Create Orgin Cert
```
Click SSL/TLS
Select Origin  Server
Click Create
Let Cloudflare generate private key and CSR with hostnames being *.<your_domain>.com
<your_domain.com and a Certificate Validity of 15 years.
Create
You will use the public and private key in heroku
```

# Heroku
## Add SSL
```
Go to heroku settings for app
scroll down to ssl certs
click add certificate
select manual
paste public and private
and check they are for poth www.example and example.com
```

# Go Daddy
## Namesevers
```
go do godaddy
select domain
click manage dns
scroll down to nameservers
click change
enter nameservers from cloudflare
```