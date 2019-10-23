---
title: React Print Pretty Object
date: "2019-10-21T22:12:00.121Z"
tags: ["javascript", "react"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
---

Debugging in react is super easy. I personally use React Developer Tools.

But sometimes you might be debugging in a differnt browser, lazy, or might want objects print pretty in the view.

Here is a simple snippet of code that will help you accomplish it.


```
import React from 'react';
import ReactDOM from 'react-dom';

export default class PrintPrettyObject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exampleArray: [{
        name: 'kevin'
      }],
    };
  }

  render() {
    return (
      <pre>{JSON.stringify(this.state, null, 2)}</pre>
    )
  }
}
```