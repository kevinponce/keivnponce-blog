---
title: Factory Bot uniq slug
date: "2020-11-21T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to use Factory Bot to have a uniq slug and create as much as you want.
---
How to use Factory Bot to have a uniq slug and create as much as you want.

# Factory
```
FactoryBot.define do
  factory :example do
    slug 'example1'

    initialize_with { Example.find_or_create_by(slug: slug) }
  end
end
```

# Example Used:
```
create(:example, slug: 'ex').id == create(:example, slug: 'ex').id
```
