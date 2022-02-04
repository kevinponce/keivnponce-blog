---
title: Add ssh key to github
date: "2022-01-16T22:12:00.121Z"
tags: ["git"]
header: { type: 'icon', bgColor: '#663399', icon: 'gatsby' }
description: How to add ssh key to github.
---
How to add ssh key to github.

```
ssh-keygen -t rsa
pbcopy < ~/.ssh/id_rsa.pub
```

Go to: https://github.com/settings/keys
And save new key
