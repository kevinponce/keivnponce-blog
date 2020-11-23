---
title: Devise custom view
date: "2020-01-12T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to create custom view for devise
---

Devise makes auth super easy with a rails app, but customing views can be a little tricky.

Here is a simple way to create a custom view for devise.

##First you ned to run the following in a terminal:
```
rails generate devise:views User
```
You might need to change `User` to which ever model you want to apply it to.

Now you have all of the views for registration, password, session and emails.
You might not need all of them. Delete what you do not need.


## Now you have to create routes

Change `config/routes.rb` to have the desired new controller like the following:

```
devise_for :users, controllers: { sessions: 'sessions' }
```

If you do not know the names of all the controllers, you can run the following in a termainal and it print all of the devise routes:
```
rails routes | grep devise
```

Now you need to create the desired controller.
Here is an example of one `app/controllers/sessions_controller.rb`:

``ruby
class Admin::SessionsController < Devise::SessionsController; end
```


Now all you have to do is edit the devise views and your done!
