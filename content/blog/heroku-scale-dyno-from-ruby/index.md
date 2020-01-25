---
title: Heroku Scale Dyno From Ruby
date: "2020-01-23T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to scale Heroku dynos from ruby to make sure you are always able to handle the demand.
---

I recently was working a project that requires a million+ jobs to process data.
In order to process the data in a timely fashion I need to have a lot of workers, but I do not want to pay for them to run 24-7.
I could manually scale them up before going to bed and turn them off when I go to bed, but I do want to manual do this.
Heroku has an api that will allow me to scale the dyno up and down but was a little confusing to figure out at first.

I started looking through the Dyno section and there was nothing to update the count...
It turns out they thought it would be a great idea to call it formation...

Before you are able to use the code below, you must configure environment variable for `HEROKU_OAUTH_TOKEN` and `HEROKU_APP_NAME`.


## Heroku oAuth Token
To get a heroku oAuth token, you must run the following commands in terminal or go to `https://dashboard.heroku.com/account/applications` and create a new authorization.
```
heroku plugins:install heroku-cli-oauth
heroku authorizations:create -d "Platform API example token"
```

## App name
`HEROKU_APP_NAME` is whatever you named the app on heroku that you want to control.

## Fetching Count
Here is a snippet to fetch the count of dynos:
```ruby
require 'platform-api'

heroku = PlatformAPI.connect_oauth(ENV['HEROKU_OAUTH_TOKEN'])

heroku.formation.info(ENV['HEROKU_APP_NAME'], type)['quantity']
```

## Updating Count
Here is a snippet to update the count of dynos:
```ruby
require 'platform-api'

heroku = PlatformAPI.connect_oauth(ENV['HEROKU_OAUTH_TOKEN'])

heroku.formation.update(ENV['HEROKU_APP_NAME'], type, { quantity: 1 })
```
