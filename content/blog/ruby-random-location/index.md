---
title: Ruby randomize lat/long
date: "2019-11-12T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to randomize by x amount lag and long in ruby
---

Sometime you want to share a location of something, but for security reasons you do not want to share the exact location...

Here is a simple snippet of code that will give a random lat/long around a specific point:
```
def random_loc(long:, lat:, radius_meters:)
  u = SecureRandom.random_number(1.0)
  v = SecureRandom.random_number(1.0)
  w = radius_meters / 111300.0 * Math.sqrt(u)
  t = 2 * Math::PI * v
  x = w * Math.cos(t)
  y = w * Math.sin(t)

  [x + long, y + lat]
end
```

example:
```
random_loc(lat: 34.092999, long: -118.377968, radius_meters: 200)
```
