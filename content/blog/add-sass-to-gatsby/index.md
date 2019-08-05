---
title: Add Sass to Gatsby
date: "2019-08-03T22:12:00.121Z"
tags: ["JavaScript", "Gatsby"]
header: { type: 'icon', bgColor: '#663399', icon: 'gatsby' }
---

# Install
```
npm install --save node-sass gatsby-plugin-sass
```

add the following to gatsby-config.js
```
plugins: [`gatsby-plugin-sass`]
```

```javascript
import("./src/index.scss")
```
