---
title: Pass Jbuilder to gon
date: "2019-11-21T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to pass data from jbuilder to gon.
---
Sometimes in rails you have to pass data from your controller to vanilla JavaScript or ReactJs.
This is where gon comes in! It makes it very easy to share rails objects with JavaScript.
Gon out of the box works great for simple objects, but you do not want to build complex objects a controller.
You should always keep your controller thin.

One way to create complex objects in a controller that is to be shared with Javascript, is to use jbuilder to build the object, and gon has provided a simple way to do so:

`app/controller/example_controller.rb`
```
class ExampleController < ApplicationController
  def index
    @name = 'hello world'
    gon.jbuilder template: 'app/views/example.json.jbuilder', as: :example
  end
end
```

Do not forget to add `render_gon` to your view. It is a simple step that is typically missed.
`app/views/example/index.html.erb`
```
<%= render_gon %>
```

Here is an example on how to build a json response using jbuilder.
This example is very simple, but you can replace it with a complex object you want:
```
# app/views/example.json.jbuilder
json.example @name
```

The last part is simple use it in your JavaScript:
```
gon.example.name
```
