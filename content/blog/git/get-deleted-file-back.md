---
title: Get deleted file back from git
date: "2020-11-13T22:12:00.121Z"
tags: ["git"]
header: { type: 'icon', bgColor: '#663399', icon: 'gatsby' }
description: How to use git to get a delete file
---
How to use git to get a delete file.

# Get deleted file back from git
## Use Git log to find commit id when the file was delete
git log

Once you know the commit id, you can run the following:
```
git show <commit_id>:<file> > <file>
```


In the example `commit_id` will be `c96abeb210c6fc324166bac376a9b0b00e955335`
In the example  `file` will be `app/controllers/example_controller.rb`

# Example:
```
git show c96abeb210c6fc324166bac376a9b0b00e955335:app/controllers/example_controller.rb > app/controllers/example_controller.rb
```
