---
title: Express with es6
date: "2019-09-07T22:12:00.121Z"
tags: ["javascript"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to add es6 to an express project.
---

Express is a framework that easily provide http requests.

To get start you need to create new project by the following in a terminal:
Make sure you change `example-project` to the name of your project.
```
mdkir example-project
cd example-project
npm init
```

In order to start using express, you need to install the dependencies by running the following in a terminal:

```
npm install --save express
npm install babel-cli babel-preset-env babel-loader babel-core nodemon --save-dev
```

Create `index.js` and add the following the code to it:
```javascript
import express from 'express';

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'Hello World'});
})

app.listen(3000)
console.log('app running on port ', 3000);
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