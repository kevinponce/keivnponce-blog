---
title: Socketio
date: "2022-02-18T22:12:00.121Z"
tags: ["javascript"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to 
---

A simple chat using express and socket.io.

To get start you need to create new project by the following in a terminal:
Make sure you change `chat` to the name of your project.
```
mdkir chat
cd chat
npm init
```

In order to start using express, and socket.io, you need to install the dependencies by running the following in a terminal:

```
npm install --save express
npm install --save socket.io
npm install babel-cli babel-preset-env babel-loader babel-core nodemon --save-dev
```

Create `index.js` and add the following the code to it:
```javascript
import express from 'express';
import http from 'http';
import { Server } from 'socket.io'

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  return res.sendFile(`${__dirname}/views/chat.html`)
});

io.on('connect', socket => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(3000, () => {
  console.log('app running on port ', 3000);	
});

```

Create view `views/chat.html`:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Socket.IO chat</title>
    <style>
      body { margin: 0; padding-bottom: 3rem; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }

      #form { background: rgba(0, 0, 0, 0.15); padding: 0.25rem; position: fixed; bottom: 0; left: 0; right: 0; display: flex; height: 3rem; box-sizing: border-box; backdrop-filter: blur(10px); }
      #input { border: none; padding: 0 1rem; flex-grow: 1; border-radius: 2rem; margin: 0.25rem; }
      #input:focus { outline: none; }
      #form > button { background: #333; border: none; padding: 0 1rem; margin: 0.25rem; border-radius: 3px; outline: none; color: #fff; }

      #messages { list-style-type: none; margin: 0; padding: 0; }
      #messages > li { padding: 0.5rem 1rem; }
      #messages > li:nth-child(odd) { background: #efefef; }
    </style>
  </head>
  <body>
    <ul id="messages"></ul>
    <form id="form" action="">
      <input id="input" autocomplete="off" /><button>Send</button>
    </form>

    <script src="/socket.io/socket.io.js"></script>
    <script>
      var socket = io();
      var form = document.getElementById('form');
      var input = document.getElementById('input');

      form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (input.value) {
          socket.emit('chat message', input.value);
          input.value = '';
        }
      });

      socket.on('chat message', function(msg) {
        var item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
      });
    </script>
  </body>
</html>

```

Add the following under `scripts` in `package.json`
```
"scripts": {
  "start": "nodemon index.js --exec babel-node --presets babel-preset-env"
},
```

Run the following command in the terminal to run the server:
```
npm run start
```

Open your favorite browser and go to `http://localhost:3000/`.