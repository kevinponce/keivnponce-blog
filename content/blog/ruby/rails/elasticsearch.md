---
title: Rails elasticsearch
date: "2020-03-20T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to elasticsearch in rails
---

## Install Elasticsearch
```
brew install elasticsearch
```

## Run
```
elasticsearch
```

## Test
Open `http://localhost:9200/` to make sure healthy.


## Add To ./Gemfile
```ruby
gem 'elasticsearch-model'
```

## Install gem dependencies
```ruby
bundle install
```

## Configure
```ruby
# config/initializers/elasticsearch.rb
Elasticsearch::Model.client = Elasticsearch::Client.new({
  log: true
})
```

## Apply to Model
```ruby
require 'elasticsearch/model'

class User < ApplicationRecord
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks
end

```

## Play with it
Open `bin/rails c`
```ruby
User.__elasticsearch__.create_index!(force: true) # do this before indexing in seed
User.create(email: 'ex@ample.com', password: 'password', name: 'kevin')
User.__elasticsearch__.search('kevin').results.total
```


## Custom index
Lets say you wanted to add more the waht is being indexed in eleasticsearch.

```ruby
require 'elasticsearch/model'

class Example < ApplicationRecord
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  belongs_to :user

  def as_indexed_json(options = {})
    self.as_json(
      only: [:id, :title],
      include: {
        user: {
          only: [:id, :email]
        }
      }
    )
  end
end
```

Since `Example` has user index in it, make sure you update all examples when user is updated by doing the following:
```ruby
class User < ApplicationRecord
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  has_many :examples

  after_save :index_examples_in_elasticsearch


  def index_examples_in_elasticsearch
    examples.find_each { |example| example.__elasticsearch__.index_document }
  end
end
```

```ruby
Example.__elasticsearch__.create_index!(force: true) # do this before indexing in seed
Example.create(title: 'Example', archive: false, user: User.last)
```


### Scan all fields
```
User.__elasticsearch__.search('kevin').records
```

### Scan selected fields
```ruby
User.__elasticsearch__.search(
  query: {
    multi_match: {
      query: 'kevin',
      fields: %w[name]
    }
  }
).records
```

### Starts with
```ruby
User.__elasticsearch__.search('kev*').records.total
```

## Pagination
When you add `kaminari` or `will_paginate` make sure it is above `elasticsearch-model`
```ruby
# Gemfile
gem 'kaminari'
gem 'elasticsearch-model'
```

```ruby
User.__elasticsearch__.search('kev*').page(1).records
```

## Use in a controller
```ruby
class BooksController < ApplicationController
  def index
    if query
      response = User.__elasticsearch__.search(query).page(page).results

      # recomend using jbuilder instead of building json in controller
      render json: {
        results: response.results,
        total: response.total
      }
      return
    end

    render json: {
      results: User.page(page),
      total: User.count
    }
  end

  private

  def query
    params.fetch(:query)
  end

  def page
    param.fetch(:page, 1)
  end
end
```

This works create in a dev enviroment, but eleaticsearch needs to be secure to work in production.

## Use AWS Elasticsearch
First you need to install a new gem.
```ruby
# Gemfile
gem 'faraday_middleware-aws-signers-v4'
```

### Configure
```ruby
# config/initializers/elasticsearch.rb
if Rails.env.production?
  require 'faraday_middleware/aws_signers_v4'

  Elasticsearch::Model.client = Elasticsearch::Client.new({
    log: true
  }) do |f|
    f.request(
      :aws_signers_v4,
      credentials: Aws::Credentials.new(ENV.fetch('AWS_ACCESS_KEY'), ENV.fetch('AWS_SECRET_ACCESS_KEY')),
      service_name: 'es',
      region: ENV.fetch('AWS_REGION')
    )
  end
else
  Elasticsearch::Model.client = Elasticsearch::Client.new({
    log: true
  })
end
```


