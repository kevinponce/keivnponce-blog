---
title: ES6
date: "2019-09-07T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to add es6 to an project.
---

To get start you need to create new project by the following in a terminal:
Make sure you change `example-project` to the name of your project.
```
mdkir example-project
cd example-project
npm init
```

You need to install the dependencies by running the following in a terminal:

```
npm install  @babel/cli @babel/preset-env babel-loader @babel/core @babel/node nodemon --save-dev
```

Create `index.js` and add the following the code to it:
```javascript
import express from 'express';
```

Create `.babelrc`:
```
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

Add the following under `scripts` in `package.json`
```
"scripts": {
  "start": "nodemon index.js --exec babel-node"
},
```

Run the following command in the terminal:
```
npm run start
```
