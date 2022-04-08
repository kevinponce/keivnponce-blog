---
title: Find by missing params
date: "2022-04-08T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to find by missing params
---

```javascript
Question.find({ soundUrl: { $eq: null } }, (err, questions) => {
  if (err) {
    console.log('err', err)
  }

  console.log(questions);
});

```