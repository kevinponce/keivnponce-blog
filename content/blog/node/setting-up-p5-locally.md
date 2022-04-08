---
title: Setting up p5 locally
date: "2019-09-07T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to setup p5 locally
---

I like to run p5 with express so I have a backend to talk with!

Here is my process.

Install dependencies:
```
npm install p5 --save
npm install express --save
```

## index.js
```javascript
import express from 'express';
import path from 'path';

const app = express();

app.use('/lib/p5.js', express.static(__dirname + '/node_modules/p5/lib/p5.js'));
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen('4040')
console.log(`app running on port 4040`);
```

## index.html
```html
<html>
  <head>
    <script src="lib/p5.js"></script>
    <script src="static/javascripts/sketch.js"></script>
  </head>
  <body>
    <main>
    </main>
  </body>
</html>
```

## public/javascripts/sketch.js
```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
```

now you need start it:
```
node index.js
```