---
title: Axios
date: "2019-09-07T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to use axios in node
---

Axios works server too!!!

```javascript
import axios from 'axios'

axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res => {
       const users = res.data;

       console.log(users)
     })
     .catch(err => {
       console.log('Error: ', err.message);
     });
```