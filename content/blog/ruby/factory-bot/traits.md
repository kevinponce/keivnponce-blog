---
title: Factory bot traits
date: "2020-11-21T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to use traits in Factory Bot
---
How to use traits in Factory Bot

# Factory
```
FactoryBot.define do
  factory :example do
    slug 'original'

    trait :other do
      slug 'other'
    end
  end
end
```

# Example Used:
```
create(:example, :other)
```
