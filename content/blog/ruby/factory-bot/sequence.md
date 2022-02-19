---
title: Factory bot sequence
date: "2020-11-23T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to sequence a number in Factory Bot
---
How to sequence a number in Factory Bot

# Factory
```
sequence(:email) { |n| "person#{n}@example.com" }

factory :user do
  name { "Jane Doe" }
  email

  initialize_with { new(name) }
end
```

# Example Used:
```
create(:user)
```
