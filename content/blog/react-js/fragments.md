---
title: React Fragments
date: "2020-02-19T22:12:00.121Z"
tags: ["javascript", "react"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to render multiple children without a parent node
---

Sometimes you have need to render children in a react but do not want have a parent node.
Here are two different scenarios:

# Array
You will often need to render an array of items. Here is a simple example of render an array of users.
```javascript
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChildA from './childA'
import ChildB from './childB'
import ChildC from './childC'

const users = [{
  id: 1, name: 'kevin'
}, {
  id: 2, name: 'jane',
}, {
  id: 3, name: 'steph'
}];

class Example extends Component {
  render() {
    return users.map(user => (<div key={user.id}>{user.name}</div>))
  }
}
```

# Components
Other times you need render multiple children that are not in array.
When this happens you can use a fragment
```javascript
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChildA from './childA'
import ChildB from './childB'

class Example extends Component {
  render() {
    return (
      <React.Fragment>
        <h3>Example</h3>
        <ChildA />
        <ChildB />
      </React.Fragment>
    );
  }
}
```
