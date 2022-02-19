---
title: Ruby create hash of arrays
date: "2020-11-22T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to create a hash of arrays easily.
---

How to create a hash of arrays easily.

```
Hash.new {|h, k| h[k] = [] }
```

Example of how to use in rails:
```
Example.all.reduce(Hash.new {|h, k| h[k] = [] }) do |results, ex|
  results[ex.id] = ex
  results
end
```
