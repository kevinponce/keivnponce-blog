---
title: Docker File Example
date: "2021-08-01T22:12:00.121Z"
tags: ["docker"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: Docker File Example
---

# package.json
```
{
  "dependencies": {
    "express": "*"
  },
  "scripts": {
    "start": "node index.js"
  }
}
```

# index.js
```
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi there');
});

app.listen(8080, () => {
  console.log('Listeing on port 8080');
});
```
# Dockerfile
```
FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]

```

# Run
````
docker build -T kevinponce/node_simple_web .
docker run -p 8080:8080 kevinponce/node_simple_web

docker run -p ${from_port}:${to_port} ${tag}
```