---
title: Using routes in active record
date: "2019-08-07T22:12:00.121Z"
tags: ["ruby"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
---

Some times in rails you need to render the path in the model.
Unfortunately calling `user_path(self)`, will not out of the box in the model.

To accomplish this behavior, all you need to do is add the following to your model:
```ruby
include Rails.application.routes.url_helpers
```

It is that simple.
Now you can create methods that provide the url at a route.
```ruby
def users_url
  user_path(self)
end
```

This should not be abused, and should be used sparingly.
I used this to provide a url to algolia for our admin.