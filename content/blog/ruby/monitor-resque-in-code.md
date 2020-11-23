---
title: Monitor Resque In Code
date: "2020-01-24T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to monitor resque from in ruby code so you can automatically handle scaling or send a text if it hits a certain threshold
---

Resque is amazing but sometimes it get a little backed up.
Here is how you can easily access resque details inside or ruby.

To get an overview of resque run the following:
```ruby
require 'resque'
Resque.info
```

Response:
```ruby
{
  :pending=>100,
  :processed=>200,
  :queues=>3,
  :workers=>4,
  :working=>2,
  :failed=>25,
  :servers=>["redis://192.168.1.10:6379/0"],
  :environment=>"production"
}
```

If you want to only know how many pending jobs are waiting to be processed, run:

Note this will work with all of the keys return from above(`pending`, `processed`, `queues`, `workers`, `working`, `failed`, `servers`, `environment`)
```ruby
require 'resque'
Resque.info[:pending]
```

Response:
```ruby
100
```

`Resque.info` is very useful but it will not let you know where to problem is located.
You will have to use queues to determine which is backed up

Here is how to get a list of queues:
```ruby
require 'resque'
Resque.queues
```

Response:
```ruby
["example1", "example2", "example3"]
```


Once you know which queue you want to investage, you can get the size of it:
```ruby
require 'resque'
Resque.size('example1')
```

Response:
```ruby
100
```

Now you know how to check on the size of a queue, you can send a text message using twilio or auto scale using heroku platform-api formation.