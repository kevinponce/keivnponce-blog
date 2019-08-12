---
title: Deploy Gatsby to Github Pages
date: "2019-08-12T22:12:00.121Z"
tags: ["javascript", "gatsby"]
header: { type: 'icon', bgColor: '#663399', icon: 'gatsby' }
---

Github pages is great, free, and easy to deploy static websites.

Here is a simple step my step guide on how I deployed my gatsby website to github pages.

First `gh-pages` needs to be installed:
```
npm install gh-pages --save-dev
```

Now you need add configure to get gh-pages.
All you need to do is add the your repo path from your github to `gatsby-config.js`:
```javascript
// gatsby-config.js
module.exports = {
  pathPrefix: "/reponame",
}
```

Add the following to your `package.json` file to easily deploy your site:
```
// package.json
{
  "scripts": {
    "deploy": "gatsby build && gh-pages -d public -b master"
  }
}
```

Now all you need to do is run the following to deploy your gatsby website.
```
npm run deploy
```

This would be great if it worked 100% of the time, but it failed for me...
This was because i used `window` and this works when it run in the browser but fails during build.
I fixed this issue but adding it to `componentDidMount`.