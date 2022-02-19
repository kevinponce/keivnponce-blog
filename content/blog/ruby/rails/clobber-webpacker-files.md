---
title: Rails clobber webpacker files
date: "2020-11-22T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to clear webpacker files in rails.
---

Using webpacker in rails is great, but for some reason old webpacker files do not get deleted...

Here is a little script to delete old webpacker files:

```
bin/rails webpacker:clobber
```
