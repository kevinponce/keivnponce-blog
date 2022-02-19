---
title: Ruby use Yaml
date: "2019-10-28T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to use Yaml in a ruby based project
---

Sometimes I need to create a ruby project as a proof of concept, and it is good practive to secrets in a yaml file not checked into git.

Here is a snippet of code that easily allows you import yaml:

```
require 'yaml'

cnf = YAML::load(File.open('config.yml'))

secret = cnf['example']['secret']
```

Now create a `config.yml`:
```
example:
  secret: 'abc123'
```

Just make sure to update your `.gitingnore` file to have the following"
```
config.yml
```