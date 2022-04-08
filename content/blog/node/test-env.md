---
title: Test Env
date: "2022-04-05T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to setup es6 test env.
---

First install:
```
npm i @babel/register mocha chai --save-dev
```

Then update
## package.json
```javascript
"scripts": {
  "test": "mocha --require @babel/register --recursive --exit"
},
```

# tests/index.js
```javascript
import assert from 'assert';
import { expect } from 'chai';

describe('Example', () => {
  it("test", () => {
    console.log('?')
    assert.equal(true, true);
  });

  it("hash", () => {
    const hash = { 'test': '' };

    expect(Object.keys(hash)).to.have.lengthOf(1);
    expect(hash).to.own.include({ 'test': '' });
  });
});
```
