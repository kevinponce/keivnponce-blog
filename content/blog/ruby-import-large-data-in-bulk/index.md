---
title: Ruby Import Large Amounts of Data in Bulk
date: "2020-01-25T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to import large amounts of data without abusing your database
---

Sometimes you have to import a large amount of data.
If you were to do this buret force, you would do it like this:


```ruby
10.times do |num|
  Example.create(favorite_numer: num)
end
```

The problem is it will do 10 different transactions.
This might not seem bad, but if you were doing a million, it will take a very long time.


There is an amazing gem `activerecord-import` that makes massive import fast and on a single transaction.
It looks like this:

```ruby
examples = []
10.times do |num|
  example.push Example.new(favorite_numer: num)
end

Example.import examples
```

There you go. It is that simple, and will be extremely fast.