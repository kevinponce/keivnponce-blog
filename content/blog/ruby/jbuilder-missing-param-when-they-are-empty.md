---
title: Jbuilder missing param when they are empty
date: "2020-11-21T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to have a fallback value when object is nil on an empty array in Jbuilder.
---
How to have a fallback value when object is nil on an empty array in Jbuilder.

```
@examples = []

json.example([])
json.example(@examples) do |example|
  json.id example.id
end
```
