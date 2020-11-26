---
title: Ruby create a cipher
date: "2020-11-23T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to create a cipher in ruby.
---

Cipher is a great way to encrypt and decrypt data.
Here is some code on how to create a cipher in ruby.


```ruby
class CipherService
  attr_accessor :key, :vector

  # key = SecureRandom.urlsafe_base64(24)
  # vector = SecureRandom.urlsafe_base64(9)

  def initialize(key:, vector:)
    self.key = key
    self.vector = vector
  end

  def encrypt(input)
    cipher = OpenSSL::Cipher::AES.new(256, :GCM)
    cipher.encrypt
    cipher.key = key
    cipher.iv = vector

    encrypted = cipher.update(input.to_s)
    encrypted << cipher.final

    encoded = Base64.urlsafe_encode64(encrypted)

    {
      content: encoded,
      tag:  Base64.urlsafe_encode64(cipher.auth_tag)
    }
  end

  def decrypt(input, tag)
    cipher = OpenSSL::Cipher::AES.new(256, :GCM)
    cipher.decrypt
    cipher.key = key
    cipher.iv = vector

    cipher.auth_tag = Base64.urlsafe_decode64(tag)

    decoded = Base64.urlsafe_decode64(input)
    decrypted = cipher.update(decoded)
    decrypted
  end
end
```

# Example of how to use it:
```ruby
cs = CipherService.new(key: SecureRandom.urlsafe_base64(24), vector: SecureRandom.urlsafe_base64(9))
enc = cs.encrypt('test me')
cs.decrypt(enc)
```
