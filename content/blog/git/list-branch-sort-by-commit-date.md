---
title: List branch sort by commit date
date: "2020-11-13T22:12:00.121Z"
tags: ["git"]
header: { type: 'icon', bgColor: '#663399', icon: 'gatsby' }
description: List branch sort by commit date
---
List branch sort by commit date
```
git for-each-ref --count=30 --sort=-committerdate refs/heads/ --format='%(refname:short)'
```

Or

```
git for-each-ref --format='%(committerdate) %09 %(authorname) %09 %(refname)' --sort=committerdate
```