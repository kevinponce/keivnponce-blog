---
title: Geocode near on joined table
date: "2020-11-16T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to use geocoder near method on a joined table in rails
---

How to use geocoder near method on a joined table in rails.

In this example, geocoder is added to address model, but needs to be used in a parent model

```
class Parent < ApplicationRecord
  scope :near, -> (*args) { joins(:address).merge(Address.near(*args)) }
end
```

```
class Address < ApplicationRecord
  geocoded_by :location do |obj, results|
    if geo = results.first
      obj.latitude = geo.latitude
      obj.longitude = geo.longitude
      obj.country_code = geo.country_code
    end
  end

  def location
    [address_line_1, city, state zip_code].join(' ')
  end
end
```