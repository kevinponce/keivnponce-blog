---
title: Add foreman to a rails project
date: "2021-01-24T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to add foreman to rails project
---

## Gemfile
```
group :development do
  gem 'foreman'
end
```

## Install dependencies
```
bundle install
```

## Create dev profile
```
## Procfile.dev
web: bundle exec rails s
webpacker: ./bin/webpack-dev-server
elasticsearch: elasticsearch
workers: QUEUE=*  ./bin/rails resque:work
```

## Run
```
bundle exec foreman start -f Procfile.dev
```