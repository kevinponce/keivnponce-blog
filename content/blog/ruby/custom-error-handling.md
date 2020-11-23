---
title: Ruby Custom Error Handling
date: "2019-08-07T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to write your own custom error handing in rails
---

Here is an example of how to create your own custom error:
```ruby
class Example
  class CustomError < StandardError
    def message
      'I am a custom error'
    end
  end

  class << self
    def call
      raise CustomError
    end
  end
end
```

how to use it:
```ruby
begin
  Example.call
rescue Example::CustomError => e
  puts e.message
end
```
