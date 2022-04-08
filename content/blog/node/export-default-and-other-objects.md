---
title: Export default and other objects
date: "2019-09-07T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to export default and other objects in node
---

Some times you want to export a default object and other objects, here how how you do that:

## example.js
```javascript
const ExampleType = {
  foo: 'bar',
};

function Example(name) {
  this.name = name;
}

module.exports = Example;
exports = module.exports;

exports.NameType = ExampleType;
```

```javascript
import Example, { ExampleType } from './example'
```
