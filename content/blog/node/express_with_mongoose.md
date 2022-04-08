---
title: Express with Mongoose
date: "2019-09-07T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: Example project of express with mongoose
---

## index.js
```javascript
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import config from './config';
import routes from './routes';

const app = express();
app.use(express.json());

app.use(bodyParser.json({
  limit: config.bodyLimit,
}));

app.use('/', routes);

app.listen(config.port)
console.log(`app running on port ${config.port}`);

export default app;
```

## config/db.js
```javascript
export default {
  "port": 3005,
  "mongoUrl": "mongodb://localhost:27017/example",
  "bodyLimit": "100kb",
};
```

## middleware/index.js
```javascript
import { Router } from 'express';

export default({ config, db }) => {
  let api = Router();

  return api;
}
```

## db.js
```javascript
import mongoose from 'mongoose';
import config from './config'

export default callback => {
  let db = mongoose.connect(config.mongoUrl);
  callback(db);
}
```

## router/index.js
```javascript
import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initializeDb from '../db';
import example from '../controllers/example';

let router = express();

initializeDb(db => {
  router.use(middleware({ config, db }));

  router.use('/example', example({ config, db }));
});

export default router;
```

## models/example.js
```javascript
import mongoose, { Schema } from 'mongoose';
import nestedExample from './nestedExample';

let exampleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nestedExamples: [{
    type: Schema.Types.ObjectId,
    ref: 'NestedExample'
  }],
  options: [{
    answer: String,
    isCorrectAnswer: Boolean,
    willSmithIndex: Number,
    startDate​:​ Date,
  }],
});

module.exports = mongoose.model('Example', exampleSchema);
```
## models/nestedExample.js
```javascript
import mongoose, { Schema } from 'mongoose';

let nestedExampleSchema = new Schema({
  text: String,
  name: String,
  example: {
  	type: Schema.Types.ObjectId,
  	ref: 'Example',
  	required: true,
  }
});

module.exports = mongoose.model('NestedExample', nestedExampleSchema);
````

## controllers/example.js
```javascript
import mongoose from 'mongoose';
import { Router } from 'express';
import nested from './example/nested';
import Example from '../models/example';

export default({ config, db }) => {
  let api = Router({mergeParams: true});

  api.get('/', (req, res) => {
    Example.find({}, (err, examples) => {
      if (err) {
        res.send(err);
      }

      res.json(examples);
    });
  });

  api.post('/', (req, res) => {
    let example = new Example();

    example.name = req.body.name;
    example.save(err => {
      if (err) {
        res.send(err);
      }

      res.json(example);
    });
  });

  api.get('/:id', (req, res) => {
    Example.findById(req.params.id).populate({ path: 'nested_example' }).exec((err, example) => {
      if (err) {
        res.send(err);
      }

      res.send(example);
    })
  });

  api.put('/:id', (req, res) => {
    Example.findById(req.param.id, (err, example) => {
      if (err) {
        res.send(err);
      }

      example.name = req.body.name;
      example.save(err => {
        if (err) {
          res.send(err);
        }

        res.send(example);
      })
    });
  });

  api.delete('/:id', (req, res) => {
    Example.remove({ _id: req.param.id }, (err, example) => {
      if (err) {
        res.send(err);
      }

      res.send({ message: "Example removed" });
    });
  });

  api.use('/:exampleId/nested', nested({ config, db }));

  return api;
};
```

## controllers/example/nested.js
```javascript
import mongoose from 'mongoose';
import { Router } from 'express';
import Example from '../../models/example';
import NestedExample from '../../models/nestedExample';

export default({ config, db }) => {
  let api = Router({mergeParams: true});

  api.post('/', (req, res) => {
    Example.findById(req.params.exampleId, (err, example) => {
      if (err) {
        res.send(err);
      }

      let nestedExample = new NestedExample()
      nestedExample.text = req.body.message;
      nestedExample.example = example._id

      nestedExample.save(err => {
        if (err) {
          res.send(err);
        }

        example.messages.push(nestedExample);

        example.save(err => {
          if (err) {
            res.send(err);
          }

          res.send(example)
        });
      });
    });
  });

  return api;
};

```