---
title: Mac install mongodb
date: "2022-02-19T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How install mongodb on a mac.
---

```
# Install
```
brew tap mongodb/brew
brew install mongodb-community@5.0
```

# Start
```
brew services start mongodb/brew/mongodb-community
```

# Useful folders
## Intel Processor
```
configuration file: /usr/local/etc/mongod.conf 
log directory: /usr/local/var/log/mongodb
data directory: /usr/local/var/mongodb
```

## Apple M1 Processor
```
configuration file: /opt/homebrew/etc/mongod.conf
log directory: /opt/homebrew/var/log/mongodb
data directory: /opt/homebrew/var/mongodb
```


```
mongosh "mongodb://localhost:27017"
```

## Verify Current Connection
```
db.getMongo()
```