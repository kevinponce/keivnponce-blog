---
title: Store secrects in node
date: "2022-02-19T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to store secrets in node
---


Install the package by calling:
```
npm install dotenv --save
```

Create file `.env` where all of the secrets are stored like:
```
DB_NAME="chat_db"
DB_USER="chat_user"
DB_PASSWORD="chat_px"
```

Include the `dotenv` library:
```
import 'dotenv/config'
```

After it is included, you can use it by calling:
```javascript
process.env.DB_USER
```
