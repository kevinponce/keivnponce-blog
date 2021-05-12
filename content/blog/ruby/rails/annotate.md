---
title: Rails annotate models
date: "2020-03-15T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to annotate rails models
---

One of my issues with rails is not knowing what the model looks like in the model. Inorder to know the shape of the model, you must check the schema, rails console, or database directly.


One way of fixing this is `annotate_models`. It documents the shape of the table in the mode.

To use it do the following:

## Gemfile
```ruby
group :development do
  gem 'annotate'
end
```

```ruby
bin/rails g annotate:install
```