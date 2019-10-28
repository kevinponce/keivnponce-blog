---
title: Ruby use Soap with Savon
date: "2019-10-28T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
---

So recently had to play around with a soap api. It was a little confusing, but after a while it was easy to use. Soap uses the same url endpoint for all operations, and you pass the operation in the header.

Before you start working with anything new, it is always best to look at the documentation. In the following examples we are going to use a simple calculator soap api:
http://www.dneonline.com/calculator.asmx

Soap sends and receives xml, which is not fun in ruby. `Savon` makes soap ruby like, and makes it really easy to use.
Here is how you can list operations in `Savon`:
```
require 'savon'

client = Savon.client(
  wsdl: 'http://www.dneonline.com/calculator.asmx?wsdl'
)

# provides a list of operations
puts client.operations
```


Once you know the operation, you can do the following to execute it:
```
require 'savon'

client = Savon.client(
  wsdl: 'http://www.dneonline.com/calculator.asmx?wsdl'
)

response = client.call(:add, message: {
  int_a: 4,
  int_b: 2,
})

puts response.body[:add_response][:add_result]
```


This is a basic example, but sometime for authentication, you will need to pass params in the headers. This can easily be done by doing the following:

```
require 'savon'

client = Savon.client(
  wsdl: 'http://www.dneonline.com/calculator.asmx?wsdl',
  headers: {
    'Authorization' => 'your toke would go here'
  }
)
```