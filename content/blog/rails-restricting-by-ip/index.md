---
title: Rails restricting by IP
date: "2020-01-12T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to restrict ip in a rails app
---

Sometime you are going to launch an app soon, but do not want everyone to have access to it.

Here is a simple snipet of code what will easily allow you to allow certain ips.

First you need to create the whitelists model.
This can be done by running the following commands in a terminal:
```
rails g model whitelist_pillow ip:string
rails db:migrate
```

Now we have to add code to `ApplicationController` to restrict access based on the uers ip:
```ruby
class ApplicationController < ActionController::Base
  # before_action :valid_ip_address!

  private

  def valid_ip_address!
    head :unauthorized unless Whitelist.find_by(ip: request.remote_ip)
  end
end
```

If you want to restrict access add the following to the desired controller:
```ruby
before_action :valid_ip_address!
```

Now all you have to do is create a new record with your ip in the whitelists tables.
