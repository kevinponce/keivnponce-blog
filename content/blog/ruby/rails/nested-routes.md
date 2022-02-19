---
title: Rails nested routes
date: "2021-03-15T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to clean up rails routes
---

Rails 6.1 offically fixed large routes file!
Here is an example of how to do this:


## config/routes.rb
```ruby
Rails.application.routes.draw do
  draw(:api)

  root 'home#index'
end
```

## config/routes/api.rb
```ruby
namespace :api, defaults: { format: :json } do
  devise_for :users
end
```
