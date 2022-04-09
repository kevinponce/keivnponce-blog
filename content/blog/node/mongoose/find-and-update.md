---
title: Find and update
date: "2022-04-08T22:12:00.121Z"
tags: ["node"]
header: { type: 'icon', bgColor: '#E6CE33', icon: 'js' }
description: How to find and update in node
---

```javascript
try {
  const doc = await Question.findOneAndUpdate({
    _id: question.id
  }, {
    qusetion: resp.Location
  }, {
    new: true
  });
} catch (err) {
  // Handle Error Here
  console.error(err);
}
```