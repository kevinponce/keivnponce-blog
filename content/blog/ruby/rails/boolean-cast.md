---
title: Rails boolean cast
date: "2020-11-23T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: Boolean cast
---

When writing apis, you can not always trust the data you receive.
Here is a snippet of code, that will convert all combination to boolean:

```
ActiveModel::Type::Boolean.new.cast('true') # true
ActiveModel::Type::Boolean.new.cast('false') # false

ActiveModel::Type::Boolean.new.cast('t') # true
ActiveModel::Type::Boolean.new.cast('f') # false

ActiveModel::Type::Boolean.new.cast('1') # true
ActiveModel::Type::Boolean.new.cast('0') # false

ActiveModel::Type::Boolean.new.cast(1) # true
ActiveModel::Type::Boolean.new.cast(0) # false

ActiveModel::Type::Boolean.new.cast(nil) # nil
```
