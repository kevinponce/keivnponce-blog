---
title: Build Object with Dynamic Key
date: "2019-10-21T22:12:00.121Z"
tags: ["javascript"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
---

I love es6!

Today I just learned how to build an object with an dynamic key.


```
function dynamicKey() {
  return 'example';
}

const example = {
  [dynamicKey()]: 'value',
};
```
