---
title: Add services to a rails project
date: "2020-11-24T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to add services folder to rails project
---

Here is how to add a service folder to a rails project.

In rails, I like to create services to help keep my code dry, and make sure I am always creating reusable code.
MVC(Model View Controller) is create, but some times code does not fit into this design pattern.


First I recommend checking to see if the folder is already included.
Open up rails console:
```
rails c
```

then run:
```
ActiveSupport::Dependencies.autoload_paths
```

Check to see if `app/services` is included in the paths.

If it is included and still not working, then run the following:
```
Spring stop
```

If it is not included open up `config/application.rb`.

Check autoload_paths and make sure it is loading `app/services`.
If it is not, add it like this:
```
config.autoload_paths += [
  Rails.root.join('app/services')
]
```

After this, run the following in a terminal under your rails project:
```
Spring stop
```