---
title: Rails cache
date: "2020-02-24T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to use rails cache and improve your api load time.
---

Rails is known for its lack of performance, but one of the biggest bottle neck with any framework is database access.

I love active record, but it can be slow. One thing you can do to improve some queries is add a cache layer.
This will skip the database and pull the data from redis or memcached. (depends which one you setup as.)
I am using Redis, but use it for more than a cache layer. It good for delayed jobs, or store values that need to be accessed later.


Here is a simple example of using rails cache:
```ruby
@products =  Rails.cache.fetch('products', expires_in: 1.day) do
  Product.all
end
```

I personally recommend always using expires_in, because you do not want stale data.


If for some reason you need to clear the chace layer, simply run the following command:
```ruby
Rails.cache.delete('products')
```
