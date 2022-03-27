---
title: Phaser debug
date: "2022-03-24T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to debug in Phaser
---

Run to install:
```

npm install @babel/preset-env babel-loader @babel/core @babel/cli @babel/node nodemon --save-dev

npm install webpack webpack-cli webpack-dev-server clean-webpack-plugin copy-webpack-plugin html-webpack-plugin terser-webpack-plugin dotenv-webpack --save-dev

npm install phaser webpack-merge express socket.io socket.io-client --save
```

## constants/Environment.js
```javascript
const SOCKET_IO_URL = process.env.SOCKET_IO_URL;

export {
  SOCKET_IO_URL,
};
```

## scenes/PlayScene.js
```javascript
import { io } from 'socket.io-client';
import { SOCKET_IO_URL } from 'constants/environment';

create() {
  this.socket = io(SOCKET_IO_URL);
  this.socket.on('connect', () => {
    // send data when ready  change sendData to desired name
    this.socket.emit('sendData', {});
  });

  // recieve change recieveData to desired name
  this.socket.on('recieveData', data => {
    // use data
  });

  this.socket.on('disconnectSocket', socketId => {
    // use data
  });  
}

update() {
  this.socket.emit('sendData', {});
}
```

## server/index.js
```javascript
var express = require('express');
var app = express();
var server = require('http').Server(app);
var path = require('path');

let socketConfig = {};
if (process.env.SOCKET_IO_URL && process.env.SOCKET_IO_URL.includes('localhost')) {
  socketConfig = {
    cors: {
      origin: "http://localhost:*",
      methods: ["GET", "POST"]
    }
  };
}

var io = require('socket.io')(server, socketConfig);
var dataStore = {}; // should be stored in db or redis and not memory

app.use(express.static(path.join(__dirname, '../../public')));
app.use('/assets',express.static(path.join(__dirname, '../../assets')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build/index.html'));
});

// might not need this
app.get('/vendor.js', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build/vendor.js'));
});

// might not need this
app.get('/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build/main.js'));
});

io.on('connection', socket => {
  // send data to user when connected
  socket.emit('recieveData', dataStore);

  socket.on('disconnect', function () {
    // send that socked disconnect to everyone
    io.emit('disconnectSocket', socket.id);
    delete dataStore[socket.id];
  });

  socket.on('sendData', data => {
    dataStore[socket.id] = data;

    Object.keys(dataStore).forEach(socketId => {
      io.emit('recieveData', data);
    })
  });
});

server.listen(process.env.PORT || 8081, function () {
  console.log(`Listening on ${server.address().port}`);
});

```

## webpack.common.js
```javascript
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: "eval-source-map",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  devServer: {
    static: path.resolve(__dirname, 'build'),
    compress: true,
    port: 8080,
  },
  plugins: [
    new webpack.DefinePlugin({
      'CANVAS_RENDERER': JSON.stringify(true),
      'WEBGL_RENDERER': JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'assets/**/*'),
          to: path.resolve(__dirname, 'build')
        }
      ],
    })
  ],
};

```

## webpack.dev.js
```javascript
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  
  plugins: [
    new Dotenv({
      path: `./.env.development`
    })
  ]
})
```

## webpack.prod.js
```javascript
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  performance: {
    maxEntrypointSize: 9000000,
    maxAssetSize: 90000000
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  plugins: [
    new Dotenv({
      path: `./.env.production`
    }),
    new CleanWebpackPlugin(),
  ]
})
```

## package.json
```javascript
"scripts": {
  "devBackend": "nodemon src/server/index.js --exec babel-node",
  "build": "webpack build --config webpack.prod.js",
  "dev": "webpack serve --config webpack.dev.js",
  "start": "node src/server/index.js"
},
```

## .gitignore
```
# Logs
logs
*.log
npm-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Compiled binary addons (https://nodejs.org/api/addons.html)
build

# Dependency directories
node_modules/
jspm_packages/

# Optional npm cache directory
.npm


# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz


# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

```

## Deplay
create a heroku repo
git add remote heroku {url_goes_here}
git push heroku main