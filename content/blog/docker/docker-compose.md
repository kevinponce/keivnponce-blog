---
title: Docker Compose Example
date: "2021-08-01T22:12:00.121Z"
tags: ["docker"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: Docker Compose Example
---


# package.json
```
{
  "dependencies": {
    "express": "*",
    "redis": "2.8"
  },
  "scripts": {
    "start": "node index.js"
  }
}
```

# index.js
```javascript
const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
  host: 'redis-server',
});
client.set('visits', 0);

app.get('/', (req, res) => {
  process.exit(0)
  client.get('visits', (err, visits) => {
    res.send('Number of visits ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
```

# Dockerfile
```
FROM node:alpine

WORKDIR '/usr/app'

COPY ./package.json .
RUN npm install
COPY ./ ./

CMD ["npm", "start"]
```

# docker-compose
```
version: '3'
services:
  redis-server:
    image: 'redis'
  node-app:
    restart: always # on-failure, unless-stopped, "no"
    build: .
    ports:
      - "8081:8081"
```

# Run
```
docker build -t keivnponce/just_visist .
docker run  -p 8080:8081 keivnponce/just_visist

docker-compose up --build
docker-compose up -d
docker-compose down

docker-compose ps
```