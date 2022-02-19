---
title: Factory bot pass other params to create other objects
date: "2020-11-21T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to use Factory Bot to pass other objects to create objects
---
How to use Factory Bot to pass other objects to create objects.

# Factory
```
# Factory bot pass other params to create other objects
FactoryBot.define do
  factory :example do

    transient do
      children []
    end

    after(:create) do |example, evaluator|
      evaluator.children.each do |child|
        # do what ever you want
        create(:example_to_child, example: example, child: child)
      end
    end
  end
end
```

# Example Used:
```
create(:example, children: [create(:child), create(:child)])
```
